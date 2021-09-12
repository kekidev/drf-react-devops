from django.db import models
from django.core.validators import EmailValidator

class User(models.Model):

	username = models.CharField(max_length=12)
	password = models.CharField(max_length=200)
	email = models.CharField(max_length=200, validators=[EmailValidator])

	def __str__(self):
		return self.username