from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load your trained Random Forest model
model = joblib.load('quiz_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    # Get quiz responses from JSON data
    data = request.get_json()

    # Extract features from quiz responses
    features = [
        data['Have you been experiencing hair loss?'],
        data['Do you experience any hair shedding?'],
        data['Have you been experiencing dandruff?'],
        data['How would you describe the type of dandruff?'],
        data['Do you experience itchiness on your scalp?'],
        data['Have you been experiencing hair greying issues?'],
        data['Have you undergone any specific hair treatments from the following?'],
        data['Do you regularly use these treatments on your hair?']
    ]

    # Make prediction using the loaded model
    prediction = model.predict([features])

    # Return the prediction as JSON response
    return jsonify({'prediction': prediction.tolist()})


if __name__ == '__main__':
    app.run(debug=True)
