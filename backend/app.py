from flask import Flask, request
from werkzeug.utils import secure_filename
from flask_cors import CORS
from model_interface import train, predict

app = Flask(__name__)
CORS(app)

# demo form
@app.route('/')
def hello():
	return '<form action = "/upload" method = "POST" enctype = "multipart/form-data"> <input type = "file" name = "file" /><input type = "submit"/></form> <form action = "/search" method = "POST" enctype = "multipart/form-data"> <input type = "text" name = "query" /><input type = "submit"/></form>'

# upload txt files
@app.route('/upload', methods=['POST'])
def upload():
	f = request.files['file']
	f.save(secure_filename(f.filename))
	train()
	return 'file uploaded successfully'

# upload text 
@app.route('/uploadText', methods=['POST'])
def upload_text():
	content_type = request.headers.get('Content-Type')
	if content_type == 'application/json':
		json = request.json
		print(json)
		query = json['query']
		tokenizer_success = train(query)
		return [tokenizer_success]
	else:
		return 'Content-Type not supported!'

@app.route('/search', methods=['POST'])
def search():
	content_type = request.headers.get('Content-Type')
	if content_type == 'application/json':
		json = request.json
		query = json['query']
		output = predict(query)
		return output
	else:
		return 'Content-Type not supported!'
	# return predict()

if __name__ == '__main__':
	app.run(debug = True)