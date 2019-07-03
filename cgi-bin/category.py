#!/usr/bin/python3

import cgi
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

form = cgi.FieldStorage()

mode = form.getvalue("mode")

print("Content-type: text/html; charset=utf-8")

#print html
print(
    f'''
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>category</title>
          </head>
          <body>
            <form class="" action="{mode}.py" method="post">
              <input type="hidden" name="category" value="toy">
              <input type="submit" name="" value="Toy">
            </form>
            <form class="" action="{mode}.py" method="post">
              <input type="hidden" name="category" value="movie">
              <input type="submit" name="" value="Movie">
            </form>
            <ul>
              <li><a href="#">Sanck</a></li>
            </ul>
          </body>
          <p>mode = {mode}</p>
        </html>
    '''
)
