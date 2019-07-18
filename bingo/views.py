from django.shortcuts import render

pictures_num = {
    'history': 18,
    'singer': 19,
    'snack': 15,
    'star': 15,
    'toy': 13,
    'movie': 15,
}

# Create your views here.
def top(request):
    return render(request, 'bingo/top.html')

def category(request, mode):
    params = {
        'mode': mode,
    }
    return render(request, 'bingo/category.html', params)
    lookup_field = 'pk'

def player(request, category):
    params = {
        'category': category
    }
    return render(request, 'bingo/player.html', params)

def manager(request, category):
    params = {
        'category': category
    }
    return render(request, 'bingo/manager.html', params)

def index(request, category):
    params = {
        'category': category,
    }
    return render(request, 'bingo/index.html', params)
