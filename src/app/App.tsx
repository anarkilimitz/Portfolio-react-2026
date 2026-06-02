import React, { RefObject } from 'react';
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
import Carousel3D from '../widgets/carousel3D/carousel3D';

import Page404 from '../pages/404/Page404';
import Policy from '../pages/policy/policy';

// хук контроллер для плавной прокрутки к блокам и сама плавная прокрутка инициализирована там!!!
import { useAppController } from './hooks/useAppController';

// интерфейс для пропсов MainLayout
interface MainLayoutProps {
	contactsRef: RefObject<HTMLElement | null>;
}

// применяем типизацию к компоненту
const MainLayout = ({ contactsRef }: MainLayoutProps) => (
	<>
		<Outlet />
		<Footer contactsRef={contactsRef} />
	</>
);

const PolicyLayout = () => (
	<>
		<Outlet />
	</>
);

function App() {
	const { refs, actions } = useAppController();

	return (
		<Routes>
			{/* передаем contactsRef в компонент */}
			<Route element={<MainLayout contactsRef={refs.contactsRef} />}>
				<Route
					index
					element={
						<>
							<Header
								aboutRef={refs.aboutRef}
								bottomRef={refs.bottomRef}
								onProjectsClick={actions.scrollToProjects}
								onAboutClick={actions.scrollToAbout}
								onContactsClick={actions.scrollToContacts}
							/>

							{/* Блок About */}
							<div ref={refs.aboutRef}>
								<About />
							</div>

							{/* Секция Projects */}
							<div ref={refs.projectsRef} id="projects">
								<ProjectsSlider />
							</div>

							{/* Остальные секции */}
							{/* bottomRef маячок для шапки, чтобы она знала, когда нужно поменять свой внешний вид*/}
							<div ref={refs.bottomRef}>
								<TitleNewsSection />
								<Projects />
							</div>

							<div>
								<Carousel3D />
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
