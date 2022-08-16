from django.contrib import admin
from .models import Category

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['pk', 'title', 'published']



admin.site.register(Category, CategoryAdmin)