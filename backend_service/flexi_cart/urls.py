
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import static
from django.conf import settings
from djoser import views as djoser_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v2/', include('account_service.urls')),  # USER SERVICE URLS (v2)
    # path('api/v1/', include('djoser.urls')),  # DJOSER URLS (Disabled for v2)
    path('api/v1/auth/', include('djoser.urls.jwt')),  # DJOSER JWT URLS
    path('api/v1/', include('product_service.urls')),  # PRODUCT SERVICE URLS
] + static.static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
