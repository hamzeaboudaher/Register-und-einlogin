import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Chat from './components/Chat';

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (userData) => {
        setCurrentUser(userData);
    };

    return (
        <div>
            <h1>Chat Application</h1>
            {currentUser ? (
                <Chat currentUser={currentUser} />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
