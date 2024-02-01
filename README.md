# AI and ML Bot with OpenAI APIs and Fine-Tuning

## Project Overview
This project's objective is to develop a machine-learning-based bot specifically designed to assist data science educators by emulating the teaching style of our data science instructor, Drew. It leverages OpenAI's APIs and fine-tuning capabilities to learn from transcripts of recorded classes, enabling it to not only provide contextual assistance and answer frequently asked questions but also to interact and respond in a manner that closely resembles Drew's unique teaching approach, thereby offering a personalized and familiar learning experience to students.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [How it works](#how-it-works)
- [The Process](#the-process)
	- [Research](#research)
	- [Installation](#installation)
	- [Cleaning](#cleaning)
	- [Fine-tuning](#fine-tuning)
	- [Bringing it to life](#bringing-it-to-life)
- [Presentation](#presentation)	
- [Acknowledgements](#acknowledgements)
- [License](#license)	

## Features
- **Advanced Contextual Understanding**: Uses OpenAI's models for deep contextual comprehension of data science topics.
- **FAQs and Resource Suggestions**: Answers common questions and recommends resources, leveraging fine-tuned models.
- **Transcript-Informed Learning**: Continuously learns and adapts from class transcripts.
- **Interactive Learning Experience**: Engages students with interactive and responsive discussions.

## Technologies Used
- **Cleaning:** Python/JSON, Pandas, transkriptor.com, DaVinci Resolve
- **AI/ML:** OpenAI API, Natural Language Processing, GPT Model 3.5, GPT Model 4.0, Babbage
- **Presentation:** HTML/CSS, JavaScript, Dub Dub, MidJourney, Eleven Labs, DALL-E

## How it works

- **Data Preprocessing**: Transcripts are cleaned, preprocessed, and formatted according to OpenAI's requirements.
- **Fine-Tuning**: The bot is fine-tuned using the processed transcripts on OpenAI's models, enhancing its understanding of data science topics.
- **Inference**: Utilizes the fine-tuned model to interpret and respond to student queries effectively.

## The Process

### Research
- What data would we use
- How would we train and validate the model
- Exploring AI technologies to incorporate

### Installation
   ```sh
   pip install --upgrade openai
   ```

### Cleaning
- Transcribe the recordings to text
- Python to manipulate and output in JSONL
- Format to OpenAI fine-tuning

**Before Cleaning**

![Before Cleaning](https://github.com/coblehartman/drew-chat-bot/assets/134180762/dc0b1055-f03a-45f4-9f43-86e7e168f979)

**After Cleaning**

![After Cleaning](https://github.com/coblehartman/drew-chat-bot/assets/134180762/48c47cc7-68cf-40e2-a0d9-f676c0ff40f3)


### Fine-tuning
- Create initial machine with class recording data
- Prompt the machine with questions
- Change and adjust features in playground

**Drew Bot not knowing its name yet!**

![Drew Bot thinks its name is Chris](https://github.com/coblehartman/drew-chat-bot/assets/134180762/1b9ec028-9f5a-400e-84b8-e02553f1444c)

- Add additional training and validation data
- Manually creating prompts to train for specific outputs (telling the bot its name is 'Drew')
- Adjust features until we were happy with responses


### Bringing it to life
- Connected the bot through API to our dashboard and UI
- Created a message box to ask the bot questions
- Used Midjourney and prompts to generate AI images for storytelling

**Creating the Drew Bot story with Midjourney**

<img src="https://github.com/coblehartman/drew-chat-bot/assets/134180762/d4410655-092a-4aa0-be6a-f38f5a1261d1" alt="Drew Bot" width="500"/>

## Presentation
[Drew Bot Presentation](https://www.youtube.com/watch?v=JaY12RhtUx0)

## Acknowledgements

- Our beloved instructor, Drew
- OpenAI Community
- Contributors and Open Source Enthusiasts

## License

Distributed under the MIT License. See `LICENSE` for more information.
