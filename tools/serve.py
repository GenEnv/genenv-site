#!/usr/bin/env python3
"""Local preview server that mirrors GitHub Pages' clean-URL behavior.

GitHub Pages serves /des-212 from des-212.html; python's built-in
http.server does not, so extensionless internal links 404 locally.
Run from the repo root:  python3 tools/serve.py [port]
"""
import http.server
import os
import sys


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path.split("?", 1)[0].split("#", 1)[0])
        if not os.path.exists(path) and os.path.isfile(path + ".html"):
            self.path = self.path.split("?", 1)[0].split("#", 1)[0] + ".html"
        return super().send_head()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    http.server.ThreadingHTTPServer(("", port), CleanURLHandler).serve_forever()
