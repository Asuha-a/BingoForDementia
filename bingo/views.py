from django.shortcuts import render

# Create your views here.
def top(request):
    params = {
        'mode': 'player',
    }
    return render(request, 'bingo/top.html', params)

def category(request):
    params = {
        'mode': 'player',
    }
    return render(request, 'bingo/category.html', params)
    lookup_field = 'pk'
