from flask import Flask, render_template, request, jsonify
import psycopg2

app = Flask(__name__)

# Configure PostgreSQL connection
conn = psycopg2.connect(
    host="your_host",
    database="your_database",
    user="your_username",
    password="your_password"
)

# Define route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Define route for handling button click and fetching data from the database
@app.route('/fetch-data', methods=['POST'])
def fetch_data():
    try:
        # Fetch data from the database using PostgreSQL queries
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM your_table")
        data = cursor.fetchall()
        cursor.close()

        # Process the data and prepare it for sending as a JSON response
        processed_data = process_data(data)

        # Return the processed data as a JSON response
        return jsonify({'data': processed_data})

    except Exception as e:
        # Handle any exceptions that occur during the database query or data processing
        return jsonify({'error': str(e)}), 500

# Helper function to process the fetched data
def process_data(data):
    processed_data = []
    # Perform any necessary processing on the fetched data, e.g., formatting, calculations, etc.
    # Append the processed data to the processed_data list
    # Example: processed_data.append({'x': data[0], 'y': data[1]})

    return processed_data

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)