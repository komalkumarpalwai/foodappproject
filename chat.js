const responses = {
    "hi":"welcome to foddie website, we are under maintance",
    "hello": "Hi there!",
    "how are you": "I'm just a bot, but thanks for asking!",
    "what is your name": "I'm just a bot, I don't have a name.",
    "who created you": "I was created by an amazing developer!",
    "how old are you": "I don't have an age, I'm always learning!",
    "what can you do": "I can provide information, answer questions, and chat with you!",
    "default": "Sorry, I didn't understand that."
};

function sendMessage() {
    let userMessage = document.getElementById('user-input').value;
    document.getElementById('chat-display').innerHTML += `<div class="user-message">${userMessage}</div>`;
    document.getElementById('user-input').value = '';

    let botResponse = getBotResponse(userMessage);
    document.getElementById('chat-display').innerHTML += `<div class="bot-message">${botResponse}</div>`;
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    let botResponse = responses[userMessage] || responses["default"];
    return botResponse;
}