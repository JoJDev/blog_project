from django.db import models
from user.models import User
from categories.models import Category

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    content = models.TextField(null=True, blank=True)
    slug = models.SlugField(max_length=255, unique=True)
    published = models.BooleanField(default=False)
    miniature = models.ImageField(upload_to='blog_centre/images/', blank=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    categories = models.ManyToManyField(Category)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}'