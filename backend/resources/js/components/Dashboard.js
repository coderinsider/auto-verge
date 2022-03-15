import React from 'react';
import ReactDOM from 'react-dom';

export default function Dashboard() {
    return (
        <h1>Welcome to admin Dashboard!</h1>
    );
}

if (document.getElementById('welcome-dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('welcome-dashboard'));
}