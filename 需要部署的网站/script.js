document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // 使用提供的API KEY
    const API_KEY = '6b94367d3ae3d4a837b2e170228f18f4.r1GVHwh0OTOM7Dcf';

    function getBackgroundClass(messageLength) {
        if (messageLength < 20) {
            return 'bg-short';
        } else if (messageLength < 50) {
            return 'bg-medium';
        } else {
            return 'bg-long';
        }
    }

    function addMessage(message, isUser) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'ai-message');
        messageElement.classList.add(getBackgroundClass(message.length));
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function getAIResponse(userMessage) {
        // ... 保持不变 ...
    }

    async function handleUserInput() {
        // ... 保持不变 ...
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // 移除了updateOnlineCount函数和相关的初始化代码
});