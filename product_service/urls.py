from django.urls import path
from .views import CategoryList, ProductCreateListView, ProductRetrieveUpdate

urlpatterns = [
    path('product/', ProductCreateListView.as_view(), name='product-list-create'),
    path('product/<slug:slug>/', ProductRetrieveUpdate.as_view(),
         name='product-retrieve-update-delete'),

    path('category/', CategoryList.as_view(), name='category-list'),
]
