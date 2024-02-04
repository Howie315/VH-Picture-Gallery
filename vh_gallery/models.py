from django.db import models

# Create your models here.
class Image(models.Model):
    imageURL = models.URLField(max_length=200)
    galleryType = models.CharField(max_length=100)

    def __str__(self):
        return self.imageURL
        return self.galleryType