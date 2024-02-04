from django.db import models

# Create your models here.
class Image(models.Model):
    imageURL =models.ImageField(upload_to='images/')
    galleryType = models.CharField(max_length=100)

    def __str__(self):
        return self.imageURL
        return self.galleryType