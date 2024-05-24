import hashlib
import logging
from math import log
from os import name
from select import poll
from unicodedata import category
import logger_conf
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from django.utils import timezone

from logger_conf import configure_logger
from .models import Category, ParentCategory, Product
from .serializers import ProductSerializer, ProductDetailSerializer, CategorySerializer
from rest_framework.test import APIClient


logger = configure_logger()


class CategoryModelTest(TestCase):
    def test_category_creation(self):
        # Top Level Categories
        electronics = ParentCategory.objects.create(name='Electronics')
        clothing = ParentCategory.objects.create(name='Clothing')

        # Sub Categories
        smartphones = Category.objects.create(
            name='Smartphones', parent=electronics)
        laptops = Category.objects.create(name='Laptops', parent=electronics)
        t_shirts = Category.objects.create(name='T-Shirts', parent=clothing)

        self.assertEqual(str(electronics), 'Electronics')
        self.assertEqual(str(smartphones), 'Electronics > Smartphones')
        self.assertEqual(str(t_shirts), 'Clothing > T-Shirts')


class CategorySerializerTest(TestCase):
    def setUp(self):
        self.electronics = ParentCategory.objects.create(name='Electronics')
        self.smartphones = Category.objects.create(
            name='Smartphones', parent=self.electronics)
        self.laptops = Category.objects.create(
            name='Laptops', parent=self.electronics)

    def test_category_serializer(self):
        serializer = CategorySerializer(instance=self.smartphones)

        self.assertEqual(serializer.data['name'],  # type: ignore
                         'Smartphones')
        self.assertEqual(serializer.data['parent']  # type: ignore
                         ['name'], 'Electronics')


class ProductModelTest(TestCase):
    def setUp(self):
        self.parent = ParentCategory.objects.create(name='Electronics')
        self.category = Category.objects.create(
            name='Smartphones', parent=self.parent)
        self.product_data = {
            'name': 'Smartphone',
            'description': 'A high-end smartphone',
            'price': 799.99,
            'availability': True,
            'category': self.category,
            'brand': 'ABC',
            'stock_quantity': 100,
        }

    def test_product_model(self):
        product = Product.objects.create(**self.product_data)
        self.assertEqual(product.name, 'Smartphone')
        self.assertEqual(product.description, 'A high-end smartphone')
        self.assertEqual(product.price, 799.99)
        self.assertEqual(product.availability, True)
        self.assertEqual(product.category, self.category)
        self.assertEqual(product.brand, 'ABC')
        self.assertEqual(product.stock_quantity, 100)
        self.assertEqual(product.created_at.date(), timezone.now().date())
        self.assertEqual(product.updated_at.date(), timezone.now().date())


class ProductSerializerTest(TestCase):
    def setUp(self):
        self.elelctronics = ParentCategory.objects.create(name='Electronics')
        self.smartphones = Category.objects.create(
            name='Smartphones', parent=self.elelctronics)
        self.product_data = {
            'name': 'Smartphone',
            'description': 'A high-end smartphone',
            'price': 799.99,
            'availability': True,
            'category': 'Smartphones',
            'brand': 'ABC',
            'stock_quantity': 100,
        }

    def test_product_create_serializer(self):
        serializer = ProductSerializer(data=self.product_data)

        self.assertTrue(serializer.is_valid())

        product = serializer.save()

        self.assertEqual(product.name, 'Smartphone')    # type: ignore
        self.assertEqual(product.description,   # type: ignore
                         'A high-end smartphone')
        self.assertEqual(product.availability, True)   # type: ignore
        self.assertEqual(product.category, self.smartphones)   # type: ignore

    def test_product_update_serializer(self):
        self.product_data.pop('category')

        product = Product.objects.create(
            category=self.smartphones, **self.product_data)

        update_data = {
            'name': 'Smartphone 2',
            'description': 'A high-end smartphone 2',
            'price': 899.99,
            'availability': False,
            'category': 'Smartphones',
            'brand': 'ABC',
            'stock_quantity': 100,
        }

        serializer = ProductSerializer(instance=product, data=update_data)

        self.assertTrue(serializer.is_valid())

        product = serializer.save()

        self.assertEqual(product.name, 'Smartphone 2')  # type: ignore
        self.assertEqual(product.description,   # type: ignore
                         'A high-end smartphone 2')
        self.assertEqual(product.availability, False)   # type: ignore
        self.assertEqual(product.category, self.smartphones)    # type: ignore

    def test_product_retrieve_serializer(self):
        self.product_data.pop('category')
        product = Product.objects.create(
            category=self.smartphones, **self.product_data)

        serializer = ProductDetailSerializer(instance=product)

        self.assertEqual(serializer.data['name'], 'Smartphone')  # type: ignore
        self.assertEqual(serializer.data['description'],    # type: ignore
                         'A high-end smartphone')
        self.assertEqual(serializer.data['availability'], True)  # type: ignore

        self.assertEqual(serializer.data['category']['name'],  # type: ignore
                         'Smartphones')


class ProductViewsTest(TestCase):
    def setUp(self):

        self.client = APIClient()

        self.parent_category = ParentCategory.objects.create(
            name='Test Parent Category')
        self.category = Category.objects.create(
            name='Test Category', parent=self.parent_category)

        self.product = Product.objects.create(
            name='Test Product',
            description='This is a test product',
            price=19.99,
            availability=True,
            category=self.category,
        )

        self.list_create_url = reverse('product-list-create')
        self.retrieve_update_delete_url = reverse(
            'product-retrieve-update-delete', args=[self.product.slug])

    def test_get_product_list(self):
        response = self.client.get(self.list_create_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, 'Test Product')

    def test_create_product(self):
        data = {
            'name': 'New Product',
            'description': 'This is a new product',
            'price': 29.99,
            'availability': True,
            'category': 'Test Category',
        }

        response = self.client.post(self.list_create_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_product_detail(self):
        response = self.client.get(self.retrieve_update_delete_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, 'Test Product')

    def test_update_product(self):
        data = {
            'name': 'Updated Product',
            'price': 39.99,
        }

        response = self.client.patch(self.retrieve_update_delete_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, 'Updated Product')

    def test_delete_product(self):
        response = self.client.delete(self.retrieve_update_delete_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Product.objects.count(), 0)
