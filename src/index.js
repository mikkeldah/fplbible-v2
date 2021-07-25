import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/css/header.css';
import './static/css/homepage.css';
import './static/css/players-page.css';
import './static/css/statsboard.css';
import './static/css/recommender.css';
import './static/css/captain-picks.css';


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
