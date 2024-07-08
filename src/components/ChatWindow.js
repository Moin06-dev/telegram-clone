import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

// Define response rules based on keywords
const responseRules = [
  { keywords: ['hello', 'hi', 'hey'], response: 'Hello! How can I help you?' },
  { keywords: ['how are you', 'how do you do'], response: "I'm fine, thank you! How about you?" },
  { keywords: ['what are you up to', 'what are you doing'], response: "I'm here to help you with any questions you have." },
  { keywords: ['thank you', 'thanks'], response: "You're welcome! Is there anything else I can assist you with?" },
  { keywords: ['bye', 'goodbye', 'see you'], response: "See you soon! Have a great day!" }
];

// Dummy initial messages
const initialMessages = {
  1: [
    { sender: 'Alice', text: 'Hello! 😊', type: 'received' },
    { sender: 'User', text: 'Hi, how are you?', type: 'sent' }
  ],
  2: [
    { sender: 'Bob', text: 'How are you? 🤔', type: 'received' },
    { sender: 'User', text: 'I am fine, thanks!', type: 'sent' }
  ],
  3: [
    { sender: 'Charlie', text: 'Good morning! 🌞', type: 'received' },
    { sender: 'User', text: 'Good morning!', type: 'sent' }
  ],
  4: [
    { sender: 'Dave', text: 'See you soon. 👋', type: 'received' },
    { sender: 'User', text: 'See you!', type: 'sent' }
  ],
};

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('User'); // Mock user, replace with actual user logic

  useEffect(() => {
    if (chatId) {
      // Load initial messages for the selected chat
      setMessages(initialMessages[chatId] || []);
    }
  }, [chatId]);

  const getResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    for (let rule of responseRules) {
      for (let keyword of rule.keywords) {
        if (lowerCaseMessage.includes(keyword)) {
          return rule.response;
        }
      }
    }
    return "I'm not sure how to respond to that.";
  };

  const handleSendMessage = (message) => {
    const newMessage = { sender: user, text: message, type: 'sent' };
    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Simulate receiving a response based on the user's message
    setTimeout(() => {
      const response = getResponse(message);
      const receivedMessage = { sender: 'Alice', text: response, type: 'received' };
      setMessages(prevMessages => [...prevMessages, receivedMessage]);
    }, 1000);
  };

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
