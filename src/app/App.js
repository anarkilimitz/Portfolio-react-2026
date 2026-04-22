import React, { useRef } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import './styles/global.scss';
import './styles/variables.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../widgets/header/header';
import Footer from '../widgets/footer/footer';
import About from '../widgets/about/about';
import Projects from '../widgets/projects/projects';
import TitleNewsSection from '../widgets/titleNewsSection.jsx/titleNewsSection';

import ProjectsSlider from '../widgets/projectSlider/projectSlider';

import ArcButton from '../shared/ui/buttons/arcButton/arcButton';
import WeatherWidget from '../widgets/weather/WeatherWidget';

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
	const aboutRef = useRef(null); // для навбара скрыть/цвет изменить
	const bottomRef = useRef(null); // для навбара скрыть/цвет изменить

	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route
					index
					element={
						<>
							<Header aboutRef={aboutRef} bottomRef={bottomRef} />

							<div ref={aboutRef}>
								<About />
								<Projects />
								{/* <ArcButton /> */}
								<WeatherWidget />
							</div>

							<div ref={bottomRef}>
								<TitleNewsSection />
								<ProjectsSlider />
							</div>
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
