from django.db import models

class User(models.Model):
    email = models.EmailField(max_length=254, verbose_name="이메일")
    password = models.CharField(max_length=50, verbose_name="비밀번호")
    name = models.CharField(max_length=50, verbose_name="이름")
    birth = models.DateField(auto_now=False, auto_now_add=False)


    def __str__(self):
        return self.email, self.name, self.birth