
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import static
from django.conf import settings
from djoser import views as djoser_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
] + static.static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
