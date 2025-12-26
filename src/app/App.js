import React from 'react';
import './styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Snowfall from 'react-snowfall';

import Header from '../widgets/header/header';
import Footer from '../widgets/footer/footer';
// import MainForm from '../shared/ui/forms/form';

function App() {
	return (
		<div>
			{/* <Snowfall color='#fff'/> */}
			<Header/>
			<Footer />
		</div>
	);
}

export default App;
