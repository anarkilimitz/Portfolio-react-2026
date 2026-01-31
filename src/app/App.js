import React from 'react';
import './styles/global.scss';
import './styles/variables.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../widgets/header/header';
import Footer from '../widgets/footer/footer';
import About from '../widgets/about/about';
import Projects from '../widgets/projects/projects';
import TitleNewsSection from '../widgets/titleNewsSection.jsx/titleNewsSection';

function App() {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			{/* <TitleNewsSection /> */}
			<Footer />
		</div>
	);
}

export default App;
