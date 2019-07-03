#!/usr/bin/python3

import cgi
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

form = cgi.FieldStorage()

mode = form.getvalue("mode")
category = form.getvalue("category")

print("Content-type: text/html; charset=utf-8")

#print html
print(
    f'''
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Player</title>
          </head>
          <body>
            <p>mode = {mode}</p>
            <p>category = {category}</p>
          </body>
        </html>
    '''
)
