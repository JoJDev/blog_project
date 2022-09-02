from django.urls import path
from .views import CategoryView, CategoryDetailView

urlpatterns = [
    path('', CategoryView.as_view(), name='category_list'),
    path('<slug>', CategoryDetailView.as_view(), name='category_detail')
]