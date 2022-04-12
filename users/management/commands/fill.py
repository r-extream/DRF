# import os
#
# from django.conf import settings
# from django.core.management import BaseCommand
# from dotenv import load_dotenv
#
# from users.models import CustomUser
#
#
# class Command(BaseCommand):
#     def handle(self, *args, **options):
#         CustomUser = load_from_json('categories')
#         CustomUser.objects.all().delete()
#         for cat in CustomUser:
#             new_user = CustomUser(**cat)
#             new_user.save()
#
#             Product.objects.create(**prod)
#
#         shop_admin = ShopUser.objects.create_superuser(
#             username='django',
#             password='geekbrains',
#             email='admin@mail.com'
#         )