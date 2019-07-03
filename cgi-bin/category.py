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
    f"""
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>category</title>
          </head>
          <body>
            <ul>
              <li><a href="#">Toy</a></li>
              <li><a href="#">Movie</a></li>
              <li><a href="#">Sanck</a></li>
            </ul>
          </body>
          <p>mode = {mode}</p>
        </html>
    """
)
