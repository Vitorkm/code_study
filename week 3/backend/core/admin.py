from django.contrib import admin
from .models import Member, Video


class MemberAdmin(admin.ModelAdmin):
    fields: '__all__'

class VideoAdmin(admin.ModelAdmin):
    fields: '__all__'

admin.site.register(Member, MemberAdmin)
admin.site.register(Video, VideoAdmin)