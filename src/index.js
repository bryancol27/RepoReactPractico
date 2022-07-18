import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/App.jsx';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <App />
);

