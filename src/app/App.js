import React from 'react';
import './styles/global.scss';
import './styles/variables.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../widgets/header/header';
import Footer from '../widgets/footer/footer';
import About from '../widgets/about/about';
import Projects from '../widgets/projects/projects';
import News from '../widgets/news/news';

function App() {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<News/>
			<Footer />
		</div>
	);
}

export default App;
