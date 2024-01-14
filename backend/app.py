# app.py (Flask server)
from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
@app.route('/submitForm', methods=['POST'])
def submit_form():
    try:
        # Extract data from the form submission
        data = request.json
        date = data.get('date')
        contractor = data.get('contractor')
        welder = data.get('welder')
        cap_positive = data.get('cap_positive')
        cap_negative = data.get('cap_negative')
        district = data.get('district')
        town = data.get('town')
        adhesive = data.get('adhesive')

        # Execute the Python script
        result = subprocess.check_output(['python', 'C:\\Users\\User\\Desktop\\test\\excel-extract\\backend', '-date', date, '-contractor', contractor, '-welder', welder, '-cap_positive', cap_positive, '-cap_negative', cap_negative, '-district', district, '-town', town, '-adhesive', adhesive,])
        
        return jsonify({'success': True, 'result': result.decode('utf-8')})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
