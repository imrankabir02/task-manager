from django.urls import path, include
from .views import TaskListView, TaskDetailView, TaskCreateView, TaskUpdateView, TaskDeleteView, CustomLoginView, RegisterPage
from django.contrib.auth.views import LogoutView
from rest_framework.routers import DefaultRouter
from .api import TaskViewSet, UserViewSet, CustomAuthToken

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', TaskListView.as_view(), name='tasks'),  # Add this line for the root path
    path('login/', CustomLoginView.as_view(), name='login'),
    path('register/', RegisterPage.as_view(), name='register'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('task/<int:pk>/', TaskDetailView.as_view(), name='task'),
    path('add-new/', TaskCreateView.as_view(), name='add-new'),
    path('task-update/<int:pk>/', TaskUpdateView.as_view(), name='task-update'),
    path('task-delete/<int:pk>/', TaskDeleteView.as_view(), name='task-delete'),
    
    path('api/', include(router.urls)),
    path('api/auth/token/', CustomAuthToken.as_view(), name='api_token_auth'),
    
]