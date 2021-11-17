from django.db.models.signals import pre_save
from django.contrib.auth.models import User

"""
def UserUpdate(sender,instance,**kwargs):

    user = instance
    #print('User:',sender.username)
    if user.email != '':
        user.username == user.email
        print('user updated successfully')

pre_save.connect(UserUpdate,sender=User)
"""