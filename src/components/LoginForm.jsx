import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/users/login', formData)
            .then(response => {
                console.log('User logged in successfully:', response.data);
                onLogin(response.data); // Pass user data to parent component
            })
            .catch(error => console.error('Error logging in:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
