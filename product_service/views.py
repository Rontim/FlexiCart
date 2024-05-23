from email.mime import base
from time import sleep
from django.http import Http404
from requests import delete
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.template.defaultfilters import slugify
import hashlib
from logger_conf import configure_logger
from .models import Category, ParentCategory, Product
from .serializers import CategorySerializer, ParentCategorySerializer, ProductListSerializer, ProductSerializer, ProductDetailSerializer


logger = configure_logger()


class ProductCreateListView(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductListSerializer(products, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            product_serializer = ProductDetailSerializer(product)
            return Response(product_serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductRetrieveUpdate(APIView):
    def get_object(self, slug):
        try:
            return Product.objects.get(slug=slug)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, slug, format=None):
        product = self.get_object(slug)
        serializer = ProductDetailSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, slug, format=None):
        product = self.get_object(slug)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            product_serializer = ProductDetailSerializer(product)
            return Response(product_serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, slug, format=None):
        product = self.get_object(slug)
        serializer = ProductSerializer(
            product, data=request.data, partial=True)
        if serializer.is_valid():
            product = serializer.save()
            product_serializer = ProductDetailSerializer(product)
            return Response(product_serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, slug, format=None):
        product = self.get_object(slug)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryList(APIView):
    def get(self, request, format=None):
        parentCategory = ParentCategory.objects.all()
        serializer = ParentCategorySerializer(parentCategory, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
