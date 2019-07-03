#! /usr/bin/env python3
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

print("Content-type: text/html; charset=utf-8")

#print html
print(
    """
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Bingo for Dementia</title>
            <link rel="stylesheet" type="text/css" href="../top.css">
          </head>
          <body>
            <h1>Bingo For Dementia</h1>
            <form class="" action="category.py" method="post">
              <input type="hidden" name="mode" value="player">
              <input type="submit" name="" value="Player">
            </form>
            <form class="" action="category.py" method="post">
              <input type="hidden" name="mode" value="manager">
              <input type="submit" name="" value="Manager">
            </form>
          </body>
        </html>
    """
)
