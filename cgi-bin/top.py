#! /usr/bin/env python3
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

print("Content-type: text/html; charset=utf-8")

#print html
print(
    """

    """
)
