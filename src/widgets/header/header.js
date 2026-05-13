import React from 'react';
import styles from './header.module.scss';

import { Container, Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { FaGithub } from 'react-icons/fa';

import { useNavbarBehavior } from '../../shared/hooks/useNavbarBehavior';
import { LanguageSwitcher } from '../../shared/i18n/languageSwitcher';
import { useLanguage } from '../../shared/i18n/languageContext';
import WeatherWidget from '../weather/WeatherWidget';

const technologies = [
	'HTML5',
	'CSS3',
	'JavaScript',
	'TypeScript',
	'React',
	'SASS/SCSS',
	'Bootstrap',
	'Git',
	'REST API',
	'Webpack',
	'Supabase',
	'Figma',
	'Responsive Design',
	'UI/UX',
];

export default function Header({ aboutRef, bottomRef }) {
	const { t } = useLanguage();

	const { expanded, setExpanded, isDark, isHidden, navbarRef, closeNavbar } =
		useNavbarBehavior({
			aboutRef,
			bottomRef,
		});

	return (
		<>
			<Navbar
				className={`fixed-top 
					${styles.customNavbar} 
					${isDark ? styles.darkMode : ''}
					${isHidden ? styles.hidden : ''}`}
				variant="dark"
				expand="lg"
				expanded={expanded}
				onToggle={setExpanded}
				ref={navbarRef}
			>
				<Container>
					<Navbar.Brand href="#">{t.name}</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#about"
								className={styles.navbarNavLink}
								onClick={closeNavbar}
							>
								{t.about}
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={styles.navbarNavLink}
								onClick={closeNavbar}
							>
								{t.projects}
							</Nav.Link>
							<Nav.Link
								href="#contacts"
								className={styles.navbarNavLink}
								onClick={closeNavbar}
							>
								{t.contacts}
							</Nav.Link>
						</Nav>
						<Nav.Item className="ms-3">
							<LanguageSwitcher />
						</Nav.Item>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<header
				className={`min-vh-100 d-flex align-items-stretch ${styles.header}`}
			>
				<Container
					fluid
					className="p-3 p-sm-4 p-md-4 p-lg-5 flex-grow-1 d-flex flex-column"
				>
					<WeatherWidget />
					<div className={`text-white mt-auto ${styles.titleHeader}`}>
						<h1 className="mb-0">{t.titleHeader}</h1>
						<h3 className="mb-2 mb-sm-5">{t.subtitleHeader}</h3>
						<p className="pt-3 pt-sm-2 pt-md-1">{t.textHeader}</p>

						<div className={`d-flex gap-4 mt-0 ${styles.btnWrapper}`}>
							<Button variant="none" className={styles.primaryBtn} size="lg">
								{t.btnViewHeader}
							</Button>
							<Button
								as="a"
								href="https://github.com/anarkilimitz"
								target="_blank"
								rel="noopener noreferrer"
								variant="none"
								className={styles.primaryBtn}
							>
								<FaGithub style={{ marginRight: '10px' }} />
								GitHub
							</Button>
						</div>
					</div>
				</Container>

				{/* бегущая строка */}
				<div className={styles.fullWidthTechnologies}>
					<Container fluid className="px-0">
						<div className={styles.technologiesContainer}>
							<div className={styles.technologiesWrapper}>
								<div className={styles.technologiesTrack}>
									{[...technologies, ...technologies, ...technologies].map(
										(tech, i) => (
											<span key={i} className={styles.techItem}>
												{tech}
											</span>
										)
									)}
								</div>
							</div>
						</div>
					</Container>
				</div>
			</header>
		</>
	);
}
