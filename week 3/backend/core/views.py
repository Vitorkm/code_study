from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MemberSerializer, VideoSerializer
from .models import Member, Video

class MemberView(viewsets.ModelViewSet):
    serializer_class = MemberSerializer
    queryset = Member.objects.all()
    

class VideoView(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = Video.objects.all()
    