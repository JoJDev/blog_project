from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class UserAdmin(BaseUserAdmin):
    fieldsets = (
        ("Personal Information", {'fields': ('first_name', 'last_name')}),
        ("Authentication", {'fields': ('email', 'password', 'username')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'groups')}),
        ("Social Links", {'fields': ('twitter', 'facebook', 'twitch')}),
    )



# Register your models here.
admin.site.register(User, UserAdmin)