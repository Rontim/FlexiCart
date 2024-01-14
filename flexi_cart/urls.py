
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import static
from django.conf import settings
from djoser import views as djoser_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('djoser.urls')),  # DJOSER URLS
    path('api/auth/', include('djoser.urls.jwt')),  # DJOSER JWT URLS
    path('api/', include('product_service.urls')),  # PRODUCT SERVICE URLS
] + static.static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
