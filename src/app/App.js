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
import SwitcherSlider from '../shared/ui/buttons/switcherSlider/switcherSlider';

import Page404 from '../pages/404/Page404';
import Policy from '../pages/policy/policy';


const MainLayout = () => (
	<>
		<Outlet />
		
		<Footer />
	</>
);

const PolicyLayout = () => (
	<>
		<Outlet />
	</>
);

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route
					index
					element={
						<>
							<Header />
							{/* <About /> */}
							{/* <Projects />
							<TitleNewsSection /> */}
							<SwitcherSlider/>
						</>
					}
				/>
			</Route>
			<Route element={<PolicyLayout />}>
				<Route path="/policy" element={<Policy />} />
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
}

export default App;
