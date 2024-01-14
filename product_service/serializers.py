from unicodedata import category
from venv import create
from rest_framework import serializers

from logger_conf import configure_logger
from .models import Product, Category

logger = configure_logger()


class ParentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class CategorySerializer(serializers.ModelSerializer):
    parent = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['name', 'parent']

    def get_parent(self, obj):
        if obj.parent:
            return ParentCategorySerializer(obj.parent).data

        return None


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField()

    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        category = validated_data.pop('category')
        category, created = Category.objects.get_or_create(name=category)

        product = Product.objects.create(category=category, **validated_data)

        return product

    def update(self, instance, validated_data):
        category = validated_data.get('category', None)

        if category:
            validated_data.pop('category')
            category, created = Category.objects.get_or_create(name=category)
            instance.category = category

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance


class ProductDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = '__all__'
