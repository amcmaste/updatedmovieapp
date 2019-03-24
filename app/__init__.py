#Imports
from flask import Flask

#Initializations + configurations
app = Flask(__name__)

#Additional imports (non-circular)
from app import routes