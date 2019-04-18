import sys
from flask import Flask, render_template, request, redirect, Response, jsonify
import random, json
import pandas as pd 
from try1 import bill_data

app = Flask(__name__)

@app.route('/')
def output():
	return render_template('index.html', name='Hardik')

@app.route('/receiver', methods = ['POST'])
def worker():
	data = request.get_json()
	result = ''
	for item in data:
		print(item)
		result += str(item['make']) + '\n'

	return result

@app.route('/sender', methods = ['GET'])
def workerr():
	data =  [
        { "Name":"Hardik", "Age":"21" },
        { "Name":"Chigo", "Age":"20" },
        { "Name":"Sangam","Age": "20" }
    ]
	return json.dumps(data)

@app.route('/train', methods = ['POST'])
def workerrr():
	data = request.get_json()
	print(str(data))
	bill_data(str(data))

	return str(data)

if __name__ == '__main__':
	app.run()