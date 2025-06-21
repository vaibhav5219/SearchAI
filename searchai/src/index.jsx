import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// const root = createRoot(document.body);
const root = ReactDOM.createRoot(document.getElementById("root"));  // better compatibality
root.render(<App />);