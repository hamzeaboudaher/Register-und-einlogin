import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ currentUser }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        axios.get('/api/messages')
            .then(response => setMessages(response.data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

    const sendMessage = () => {
        axios.post('/api/messages', { sender: currentUser.username, message: newMessage })
            .then(response => {
                setMessages([...messages, response.data]);
                setNewMessage('');
            })
            .catch(error => console.error('Error sending message:', error));
    };

    return (
        <div>
            <h1>Welcome, {currentUser.username}!</h1>
            <div>
                {messages.map(message => (
                    <div key={message._id}>
                        <p>{message.sender}: {message.message}</p>
                    </div>
                ))}
            </div>
            <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
