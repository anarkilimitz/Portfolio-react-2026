import React from 'react';
import styles from './header.module.scss';

import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
	const technologies = [
		'HTML5',
		'CSS3',
		'JavaScript',
		'React',
		'SASS/SCSS',
		'Bootstrap',
		'Git',
		'REST API',
		'Webpack',
		'Figma',
		'Responsive Design',
		'UI/UX',
	];

	return (
		<>
			<Navbar
				expand="lg"
				className={`fixed-top ${styles.customNavbar}`}
				variant="dark"
			>
				<Container>
					<Navbar.Brand href="#home">Evgeniy Pavlenok</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link href="#projects">Projects</Nav.Link>
							<Nav.Link href="#contacts">Contacts</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<header
				className={`min-vh-100 d-flex align-items-stretch ${styles.header}`}
			>
				{/* title */}
				<Container fluid className="p-5 h-100">
					<div className="text-white p-5" style={{ marginTop: '280px' }}>
						<h1 className="pb-3">Hi, I'm Evgeniy</h1>
						<h3 className="pb-3">Front-End JavaScript & React Developer</h3>
						<p>I build modern, responsive web applications.</p>
					</div>
				</Container>

				{/* бегущая строка */}
				<div className={styles.fullWidthTechnologies}>
					<Container fluid className="px-0">
						<div className={styles.technologiesContainer}>
							<div className={styles.technologiesWrapper}>
								<div className={styles.technologiesTrack}>
									{/* первый набор */}
									{technologies.map((tech, index) => (
										<span key={`first-${index}`} className={styles.techItem}>
											{tech}
										</span>
									))}
									{/* второй набор */}
									{technologies.map((tech, index) => (
										<span key={`second-${index}`} className={styles.techItem}>
											{tech}
										</span>
									))}
									{/* третий набор */}
									{technologies.map((tech, index) => (
										<span key={`third-${index}`} className={styles.techItem}>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</Container>
				</div>
			</header>
		</>
	);
}

export default Header;
