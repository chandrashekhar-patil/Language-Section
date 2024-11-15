function getHelloWorldMessage() {
    document.getElementById('loading').style.display = 'block';

    const language = document.getElementById('language').value.trim();

    if (!language) {
        document.getElementById('result').innerHTML = 'Please select a language.';
        document.getElementById('loading').style.display = 'none'; 
        return;
    }

    // Updated to use the deployed backend URL
    fetch(`https://language-section-3.onrender.com/hello?language=${language}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Language not supported');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.msgText) {
                document.getElementById('result').innerHTML = `<span class="bold-text">${data.msgText}</span>`;
            } else {
                document.getElementById('result').innerHTML = 'Error: Language not supported';
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `Error occurred: ${error.message}`;
        })
        .finally(() => {
            document.getElementById('loading').style.display = 'none';
        });
}