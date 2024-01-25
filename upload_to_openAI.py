import openai
import time
import os
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

api_key = config.get('api', 'api_key')
validation_path = config.get('path', 'validation_JSONL_location')
training_path = config.get('path', 'training_JSONL_location')

# Set your OpenAI API key
openai.api_key = api_key

# Path to your JSONL file
file_path = training_path

# Function to upload the file
def upload_file(file_path):
    try:
        # Upload the file and get the file ID
        response = openai.File.create(file=open(file_path), purpose='fine-tune')
        file_id = response['id']
        print(f"File uploaded successfully. File ID: {file_id}")
        return file_id
    except openai.error.OpenAIError as e:
        print(f"An error occurred: {e}")
        return None

# Function to implement rate limiting
def rate_limited_request(file_path):
    # Define your rate limits (e.g., 1 request per 60 seconds)
    request_interval = 60

    # Upload the file with rate limiting
    file_id = upload_file(file_path)
    
    if file_id is None:
        print("Retrying upload after waiting...")
        time.sleep(request_interval)
        file_id = upload_file(file_path)
    
    return file_id

# Main function
def main():
    file_id = rate_limited_request(file_path)
    if file_id:
        print("File uploaded and ready for use in fine-tuning.")
    else:
        print("Failed to upload the file.")

if __name__ == "__main__":
    main()