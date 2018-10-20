from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    picture = models.ImageField(default='default.png', blank=True)
    author = models.ForeignKey(User, default=None, on_delete=models.DO_NOTHING)
    phone = models.DecimalField(max_digits=10, decimal_places=0, default=None)
    price = models.DecimalField(max_digits=8, decimal_places=2, default=None)

    def __str__(self):
        return self.title

    def snippet(self):
        return self.body[:50] + '...'
