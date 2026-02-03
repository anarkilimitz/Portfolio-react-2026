import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './app/styles/global.scss';

import App from './app/App';
import { LanguageProvider } from './shared/i18n/languageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</BrowserRouter>
	</React.StrictMode>
);
