from django.shortcuts import render


def home_view(request):
    return render(request, 'index.html')


def activities_view(request):
    return render(request, 'activities.html')
