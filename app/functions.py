#Imports
from app import db
from app.models import User, Movie, Question, Answer
from flask_login import current_user

#Functions
def write_user(username, email, password):
	
	first = User.query.filter_by(username=username).first()
	second = User.query.filter_by(email=email).first()
	
	if first or second:
		return str('exists')
	
	else:
		user = User(username=username, email=email)
		user.set_password(password)
		db.session.add(user)
		db.session.commit()
		return str('added')