import json
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

training_path = config.get(*('path', 'training_file_location'))

def process_conversation(input_file, output_file):
    # Initialize the conversation list
    conversation = []
    
    # Open the input file and read the lines
    with open(input_file, 'r') as file: 
        lines = file.readlines()
 
    # Process each line
    for line in lines:
        # Check for text, if text append it
        if line.strip():  # Check if line is not empty
            conversation.append({"messages": [{"role": "assistant", "content": line.strip()}]})
        else:  # If line is empty, continue
            continue

    # Write to JSONL file
    with open(output_file, 'w') as file:
        for entry in conversation:
            json.dump(entry, file)
            file.write('\n')

# You would need to provide the correct file paths as per your system
process_conversation(training_path, 'speedrun_training_output.jsonl')