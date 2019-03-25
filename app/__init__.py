#Imports
from flask import Flask
from flask_bootstrap import Bootstrap

#Initializations + configurations
app = Flask(__name__)
bootstrap = Bootstrap(app)

#Additional imports (non-circular)
from app import routes