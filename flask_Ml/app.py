from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import pickle
import os

app = Flask(__name__)
CORS(app)

port = int(os.environ.get('PORT', 5000))  # Use port 5000 as default if PORT is not set

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)

mortality_model = pickle.load(open("model.pkl", "rb"))
classification_model = pickle.load(open("model_classify.pkl", "rb"))

@app.route('/', methods=['POST','GET'])
def home():
	response = jsonify(message="EveryThing Working Fine")
	return response

@app.route('/predict', methods=['POST','GET'])
def predict():
    data = request.json
o
    age = data.get('AGE')
    gen = data.get('GENDER')
    alb = data.get('ALBUMIN')
    bil = data.get('BILIRUBIN')
    alk = data.get('ALK_PHOSPHATE')
    sgot = data.get('SGOT')
    act = data.get('ASCITES')
    spd = data.get('SPIDERS')
    prot = data.get('PROTHROMBIN')
    hepa = data.get('HEPATOMEGALY')
    palt = data.get('PALTELETS')
    clas = data.get('CLASS')
    fet = data.get('ALPHA_FETOPROTEIN')
    ferr = data.get('FERRITIN')
    hemo = data.get('HEMOGLOBIN')
    prot = data.get('PROTINE')
    vari = data.get('VARICES')
    mala = data.get('MALAISE')

    predict_result = mortality_model.predict([[age,gen,alb,bil,alk,sgot,act,spd,prot,hepa,palt,clas,fet,ferr,hemo,prot,vari,mala]])
    classify_result = classification_model.predict([[age,gen,alb,bil,alk,sgot,act,spd,prot,hepa,palt,fet,ferr,hemo,prot,vari,mala]])

    if (predict_result[0] == 1):
    	if (classify_result[0] == 1):
    		response = jsonify(message="High Chances of mortality",message2 = "Cirrhois")
    		return response;
    	elif (classify_result[0] == 2):
    		response = jsonify(message="High Chances of mortality",message2 = "Hepatitis")
    		return response;
    	elif (classify_result[0] == 3):
    		response = jsonify(message="High Chances of mortality",message2 = "Hepatocellular carcinoma")
    		return response;
    	elif (classify_result[0] == 4):
    		response = jsonify(message="High Chances of mortality",message2 = "No Disease")
    		return response;
    else:
    	if (classify_result[0] == 1):
    		response = jsonify(message="Low Chances of mortality",message2 = "Cirrhois")
    		return response;
    	elif (classify_result[0] == 2):
    		response = jsonify(message="Low Chances of mortality",message2 = "Hepatitis")
    		return response;
    	elif (classify_result[0] == 3):
    		response = jsonify(message="Low Chances of mortality",message2 = "Hepatocellular carcinoma")
    		return response;
    	elif (classify_result[0] == 4):
    		response = jsonify(message="Low Chances of mortality",message2 = "No Disease")
    		return response;

if __name__ == '__main__':
    app.run(debug=True)
