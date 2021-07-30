from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .models import Users

from pymongo import MongoClient
from config.settings import get_key
import datetime 
import certifi
 
conn = MongoClient(get_key("Driver_Code"), tlsCAFile=certifi.where())
db = conn.get_database(get_key("MongoDB_DBName"))
collection = db.Users


@api_view(['POST'])
def signUp(request):
    serializer = UserSerializer(data = request.data)
    
    if serializer.is_valid():
        if list(collection.find({"email": serializer.data["email"]})): 
            return Response({"message": "사용중인 이메일 입니다."}, status=status.HTTP_400_BAD_REQUEST)

        collection.insert_one(serializer.data)
        pid = list(collection.find())[::-1][0]['_id']
        
        return Response({"pid": str(pid), "messge": "Sign up success"}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": "유효한 이메일 주소를 입력하시오."}, status=status.HTTP_400_BAD_REQUEST)