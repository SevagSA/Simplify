from django.urls import path, include

urlpatterns = [
    path('members/', include('member.api.urls')),
    path('transactions/', include('transactions.api.urls'))
]
