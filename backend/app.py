from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def main():
    return "hello world"

@app.route("/upload_csv", methods=["POST"])
def upload_csv():
    pass