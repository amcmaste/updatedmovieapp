#Imports
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo
from wtforms.fields.html5 import EmailField

#Form defintion
class LoginForm(FlaskForm):
	username = StringField('Username', id="login-username", validators=[DataRequired()])
	password = PasswordField('Password', id="login-password", validators=[DataRequired()])
	login_submit = SubmitField('Submit', id="login-submit")
	
class SignupForm(FlaskForm):
	username = StringField('Username', id="signup-username", validators=[DataRequired()])
	email = EmailField('Email', id="email", validators=[DataRequired(), Email()])
	password = PasswordField('Password', id="signup-password", validators=[DataRequired()])
	verfiy = PasswordField('Confirm Password', id="verify", validators=[DataRequired(), 
	    EqualTo('password')])
	signup_submit = SubmitField('Submit', id="signup-submit")
	
class SelectMovieForm(FlaskForm):
	title = StringField('Movie Title', id="title", validators=[DataRequired()])
	movie_submit = SubmitField('Submit', id="movie-submit")

class QuestionForm(FlaskForm):
	question = TextAreaField('Question', id="question", validators=[DataRequired()])
	question_submit = SubmitField('Submit', id="question-submit")
	
class AnswerForm(FlaskForm):
	answer = TextAreaField('Answer', id="answer", validators=[DataRequired()])
	answer_submit = SubmitField('Submit', id="answer-submit")