import React from 'react';
import './styles/global.scss';
import './styles/variables.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Snowfall from 'react-snowfall';

import Header from '../widgets/header/header';
import Footer from '../widgets/footer/footer';
import About from '../widgets/about/about';
// import MainForm from '../shared/ui/forms/form';

function App() {
	return (
		<div>
			{/* <Snowfall color='#fff'/> */}
			<Header />
			<About />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
