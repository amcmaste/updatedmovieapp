#Imports
import os
from flask import render_template, request, redirect, url_for, jsonify
from flask_login import current_user, login_user, logout_user
from app import app
from app.forms import LoginForm, SignupForm, SelectMovieForm, QuestionForm, AnswerForm
from app.functions import write_user
from app.models import User, Movie, Question, Answer, QuestionVotes, AnswerVotes
from app import db

#Route definitions
@app.route('/', methods=['GET', 'POST'])
def main():
	return render_template('main.html', login=LoginForm(), signup=SignupForm(), movie=SelectMovieForm(), question=QuestionForm(), answer=AnswerForm())
	
@app.route('/add-user', methods=['GET', 'POST'])
def add_user():
	confirmation = write_user(request.form['username'], request.form['email'], request.form['pword'])
	return confirmation