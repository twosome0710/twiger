from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer

from users.models import User

from pymongo import MongoClient
from src.settings import get_key
import datetime 
 
conn = MongoClient('mongodb+srv://'+get_key("MongoDB_UserName")+':'+get_key("MongoDB_PWD")+'@twigerdb.oyqtu.mongodb.net/'+get_key("MongoDB_DBName")+'?retryWrites=true&w=majority')
db = conn.get_database(get_key("MongoDB_DBName"))
collection = db.twigerDB.User

print('conn: ', conn)

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'SignUp' : '/',
    }

    return Response(api_urls)


@api_view(['POST'])
def signUp(request):
    serializer = UserSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
        collection.insert_one(serializer.data)
        print("Sign up success")
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer._errors, status=status.HTTP_400_BAD_REQUEST)
        