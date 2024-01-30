document.addEventListener("DOMContentLoaded", function() {
    let VIDEO_PLAYER_ID = 'video-player';
    let FORM_ID = 'ml-form';
    let INPUT_ID = 'ml-input';
    let RESPONSE_CONTAINER_ID = 'api-response';
    let API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
    let MODEL_NAME = 'ft:gpt-3.5-turbo-1106:personal::8mZmk5py';
    // let TEMPERATURE = 0.85;

    let videoPlayer = document.getElementById(VIDEO_PLAYER_ID);
    let form = document.getElementById(FORM_ID);
    let input = document.getElementById(INPUT_ID);
    let responseContainer = document.getElementById(RESPONSE_CONTAINER_ID);

    videoPlayer.play();

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        let inputValue = input.value.trim();
        console.log(inputValue)
        if (inputValue !== '') {
            sendRequest(inputValue);
            input.value = '';
        }
    }

    function sendRequest(inputValue) {
        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AUTH_TOKEN
            },
            body: JSON.stringify({
                "model": MODEL_NAME,
                "temperature": 0.75,                // Set temperature
                "max_tokens": 50,               // Set max_tokens
                "top_p": 0.5,                      // Set top_p
                "frequency_penalty": 0.3,       // Set frequency_penalty
                "presence_penalty": 0.7,           // Set presence_penalty
                "messages": [
                    {"role": "system", "content": "You are a conversational educator"},
                    {"role": "user", "content": inputValue}
                ]
            })
        })
        .then(handleResponse)
        .then(
            displayResponse
        )
        .catch(handleError);
    }    

    function handleResponse(response) {
        console.log(response)
        if (response.ok) {
            console.log("it's ok")
            return response.json()
        } else {
            // Handle HTTP errors
            response.text().then(text => {
                throw new Error(`API Error: ${response.status} ${response.statusText} - ${text}`);
            });
        }
    }

    function displayResponse(data) {
        console.log(data)
        let response = data.choices.length > 0 ? data.choices[0].message.content : 'No response received.';
        let paragraph = document.createElement('p');
        console.log(response)
        paragraph.textContent = response;
        responseContainer.appendChild(paragraph);
    }

    function handleError(error) {
        // Display and log the error for better diagnostics
        console.error('Request Failed:', error);
        displayResponse('Error: ' + error.message);
    }
});