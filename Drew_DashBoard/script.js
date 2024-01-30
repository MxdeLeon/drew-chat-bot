document.addEventListener("DOMContentLoaded", function() {
    let VIDEO_PLAYER_ID = 'video-player';
    let FORM_ID = 'ml-form';
    let INPUT_ID = 'ml-input';
    let RESPONSE_CONTAINER_ID = 'api-response';
    let API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
    let AUTH_TOKEN =
    let MODEL_NAME = 'gpt-3.5-turbo';
    let TEMPERATURE = 0.9;

    let videoPlayer = document.getElementById(VIDEO_PLAYER_ID);
    let form = document.getElementById(FORM_ID);
    let input = document.getElementById(INPUT_ID);
    let responseContainer = document.getElementById(RESPONSE_CONTAINER_ID);

    videoPlayer.play();

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        let inputValue = input.value.trim();
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
                'Authorization': AUTH_TOKEN
            },
            body: JSON.stringify({
                "model": MODEL_NAME,
                "temperature": TEMPERATURE,
                "prompt": inputValue
            })
        })
        .then(handleResponse)
        .catch(handleError);
    }

    function handleResponse(response) {
        if (response.ok) {
            return response.json().then(displayResponse);
        } else {
            throw new Error('Network response was not ok');
        }
    }

    function displayResponse(data) {
        let response = data.choices && data.choices.length > 0 ? data.choices[0].text : 'No response received.';
        let paragraph = document.createElement('p');
        paragraph.textContent = response;
        responseContainer.appendChild(paragraph);
    }

    function handleError(error) {
        displayResponse('Error: ' + error.message);
    }
});
