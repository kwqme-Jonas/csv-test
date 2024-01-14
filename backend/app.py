# app.py (Flask server)
from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/', methods=['POST'])
def submit_form():
    try:
        # Extract data from the form submission
        data = request.json
        index = data.get('index')
        addon = data.get('addon')

        # Execute the Python script
        result = subprocess.check_output(['python', 'C:\\Users\\User\\Desktop\\test\\excel-extract\\backend', '-index', index, '-addon', addon])
        
        return jsonify({'success': True, 'result': result.decode('utf-8')})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
