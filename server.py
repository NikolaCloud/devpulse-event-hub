#!/usr/bin/env python3
"""
DevPulse - Developer Conferences & CFP Aggregator Web Server
Zero external dependency Python 3 HTTP server.
"""

import http.server
import socketserver
import os
import sys

PORT = 8004
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        sys.stderr.write(f"[DevPulse] {self.address_string()} - {format%args}\n")

def run_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
        print("=" * 60)
        print(" DevPulse // Global Developer Conferences & CFP Hub")
        print(f" Server running at: http://127.0.0.1:{PORT}")
        print(" Press Ctrl+C to stop.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server gracefully...")

if __name__ == "__main__":
    run_server()

