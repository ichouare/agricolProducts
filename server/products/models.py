from django.db import models
from user.models import User

# Create your models here.
class products(models.Model):
    CHOSE_STATUS_CHOICES = [
        ('great', 'Great'),
        ('not_great', 'Not Great'),
    ]
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='upload/', default='')
    note = models.DecimalField(max_digits=2, decimal_places=0, default=0)
    user = models.ManyToManyField(User)
    chosestatus = models.CharField(
        max_length=10,
        choices=CHOSE_STATUS_CHOICES,
        default='not_great'  # Default value can be set as per your requirement
    )

    def __str__(self):
        return self.name