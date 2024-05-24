from collections.abc import Iterable
import hashlib
from django.db import models
# from django.contrib.auth import get_user_model
from django.template.defaultfilters import slugify
from os.path import join


def product_image_path(instance, filename):
    return join('product', str(instance.slug), filename)


class ParentCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        base_slug = slugify(self.name)

        if not self.slug:
            proposed_slug = f"{base_slug}-{self.pk}" if self.pk is not None else base_slug

            existing_slugs = set(ParentCategory.objects.filter(
                slug__startswith=proposed_slug).values_list('slug', flat=True))

            counter = 1
            while proposed_slug in existing_slugs:
                proposed_slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = self.hash_slug(proposed_slug)

        super().save(*args, **kwargs)

    def hash_slug(self, value):
        hash_object = hashlib.sha256(value.encode())
        return hash_object.hexdigest()


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    parent = models.ForeignKey(
        ParentCategory, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        if self.parent:
            return f'{self.parent} > {self.name}'

        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    availability = models.BooleanField(default=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True)
    brand = models.CharField(max_length=255, null=True, blank=True)
    stock_quantity = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)
    image = models.ImageField(
        upload_to=product_image_path, null=True, blank=True)
    image2 = models.ImageField(
        upload_to=product_image_path, null=True, blank=True)
    image3 = models.ImageField(
        upload_to=product_image_path, null=True, blank=True)
    image4 = models.ImageField(
        upload_to=product_image_path, null=True, blank=True)

    def __str__(self):
        return f'{self.name} - {self.price} \n -{self.description}'

    def save(self, *args, **kwargs):
        base_slug = slugify(self.name)

        if not self.slug:
            proposed_slug = f"{base_slug}-{self.pk}" if self.pk is not None else base_slug

            existing_slugs = set(Product.objects.filter(
                slug__startswith=proposed_slug).values_list('slug', flat=True))

            counter = 1
            while proposed_slug in existing_slugs:
                proposed_slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = self.hash_slug(proposed_slug)

        super().save(*args, **kwargs)

    def hash_slug(self, value):
        hash_object = hashlib.sha256(value.encode())
        return hash_object.hexdigest()


class Offers(models.Model):
    class OfferType(models.TextChoices):
        PERCENTAGE = 'PERCENTAGE'
        PRICE = 'PRICE'
        BUY_ONE_GET_ONE = 'BUY_ONE_GET_ONE'
        BUY_TWO_GET_ONE = 'BUY_TWO_GET_ONE'

    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=True, blank=True)
    offer_type = models.CharField(
        max_length=255, choices=OfferType.choices, default=OfferType.PERCENTAGE)

    def __str__(self):
        return f'{self.product.name} - {self.offer_type}'   # type: ignore
