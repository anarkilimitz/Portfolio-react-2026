import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './styles/global.scss';
import './styles/variables.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../widgets/header/header';
import Footer from '../widgets/footer/footer';
import About from '../widgets/about/about';
import Projects from '../widgets/projects/projects';
import TitleNewsSection from '../widgets/titleNewsSection.jsx/titleNewsSection';

import Page404 from '../pages/404/Page404';
import Policy from '../pages/policy/policy';

const Layout = () => (
	<>
		<Outlet />
		<Footer />
	</>
);

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					index
					element={
						<>
							<Policy/>
							{/* <Header /> */}
							{/* <About />
							<Projects />
							<TitleNewsSection /> */}
						</>
					}
				/>
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	);
}

export default App;
