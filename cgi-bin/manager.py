#!/usr/bin/python3

import cgi
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

form = cgi.FieldStorage()

category = form.getvalue("category")

print("Content-type: text/html; charset=utf-8")

N = 10
def createRandom(N):
    #create random number
    return random
random = createRandom(N)

#print html
print(
    f'''
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Player</title>
            <script type="text/javascript">
              let random = {random}
              function onClick(){{

              }}
            </script>
          </head>
          <body>
            <a href="#">index</a>
            <button type="button" name="button" onclick="onClick">Next</button>
            <p>mode = {mode}</p>
            <p>category = {category}</p>
          </body>
        </html>
    '''
)
