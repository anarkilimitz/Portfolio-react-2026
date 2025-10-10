import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './app/styles/global.scss';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
