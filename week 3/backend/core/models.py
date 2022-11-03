from django.db import models

class Member(models.Model):
    name = models.CharField('Name', max_length=150)
    acronym = models.CharField('Acronym', max_length=5)
    birthdate = models.DateField('BirthDate', max_length=30)
    email = models.EmailField('Email')

    def __str__(self):
        return self.acronym

class Video(models.Model):
    thumbnail = models.URLField('Thumbnail')
    title = models.CharField('Title', max_length=50)
    icon = models.URLField('Icon')

    def __str__(self):
        return self.title