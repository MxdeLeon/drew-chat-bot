# if you want to convert transcriptions into pandas dataframe to clean it
import pandas as pd
import json

def process_transcript(file_path):
    with open(file_path, 'r') as file:
        lines = [line.strip() for line in file if line.strip()]

    data = []
    current_speaker = None
    current_text = ""

    for i in range(0, len(lines), 2):
        speaker = lines[i]
        text = lines[i + 1] if i + 1 < len(lines) else ""

        if speaker == current_speaker:
            # Concatenate text if the same speaker continues
            current_text += " " + text
        else:
            if current_speaker is not None:
                # Save the previous speaker's text
                data.append([current_speaker, current_text])
            current_speaker = speaker
            current_text = text

    # Add the last speaker's text
    if current_speaker is not None:
        data.append([current_speaker, current_text])

    return pd.DataFrame(data, columns=['Speaker', 'Text'])

file_path = r'file_path'
df = process_transcript(file_path)

print(df)
