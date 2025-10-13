import React from 'react';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../widgets/footer/footer';
import MainForm from '../shared/ui/forms/form';

function App() {
	return (
		<div>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			<Footer />
			<MainForm />
		</div>
	);
}

export default App;
