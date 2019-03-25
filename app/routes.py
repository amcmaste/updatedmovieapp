#Imports
from flask import render_template, url_for
from app import app

#Route definitions
@app.route('/', methods=['GET'])
def main():
	return render_template('main.html')