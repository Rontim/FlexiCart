from django.contrib import admin
from django.utils.html import format_html
from .models import Category, ParentCategory, Product, Offers


@admin.register(ParentCategory)
class ParentCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

    actions = ['create_slugs']

    def create_slugs(self, request, queryset):
        for parent_category in queryset:
            parent_category.save()


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent')

    def parent(self, obj):
        if obj.parent:
            return obj.parent.name

        return None

    parent.short_description = 'Parent Category'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price',
                    'availability', 'created_at', 'updated_at', 'image_tag')

    search_fields = ('name', 'category__name')

    def image_tag(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" />'.format(obj.image.url))
        return ''

    image_tag.short_description = 'Image'


@admin.register(Offers)
class OffersAdmin(admin.ModelAdmin):
    list_display = ('product', 'offer_type')
    search_fields = ('product',)
    list_filter = ('offer_type',)
