import json

conversation = []

with open('name_requests.txt', 'r', encoding='utf-8') as file:
    request_lines = file.readlines()

with open('name_responses.txt', 'r', encoding='utf-8') as file:
    response_lines = file.readlines()

for i in range(len(response_lines)):
    conversation.append({"messages": [{"role": "user", "content": request_lines[i].strip()}, {"role": "assistant", "content": response_lines[i].strip()}]})
    
# Write to JSONL file
with open('name_training_output.jsonl', 'w') as file:
    for entry in conversation:
        json.dump(entry, file)
        file.write('\n')