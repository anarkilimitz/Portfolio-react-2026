import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';

import { Container, Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import { FaGithub } from 'react-icons/fa';

import { LanguageSwitcher } from '../../shared/i18n/languageSwitcher';
import { useLanguage } from '../../shared/i18n/languageContext';

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

	const { t } = useLanguage();
	// закрывать навбар при клике на категорию
	const [expanded, setExpanded] = useState(false);
	const closeNavbar = () => setExpanded(false);

	// закрывать навбар при клике по экрану и esc
	const navbarRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (e.key === 'Escape') {
				setExpanded(false);
				return;
			}

			if (
				expanded &&
				navbarRef.current &&
				!navbarRef.current.contains(e.target)
			) {
				setExpanded(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleClickOutside);
		};
	}, [expanded]);

	return (
		<>
			<Navbar
				className={`fixed-top ${styles.customNavbar}`}
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
								className={`${styles.navbarNavLink} px-3 px-lg-4`}
								onClick={() => setExpanded(false)}
							>
								{t.about}
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={`${styles.navbarNavLink} px-3 px-lg-4`}
								onClick={() => setExpanded(false)}
							>
								{t.projects}
							</Nav.Link>
							<Nav.Link
								href="#contacts"
								className={`${styles.navbarNavLink} px-3 px-lg-4`}
								onClick={() => setExpanded(false)}
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
				{/* title */}
				<Container fluid className="p-3 p-sm-4 p-md-4 p-lg-5 h-100">
					<div className={`text-white p-5 ${styles.titleHeader}`}>
						<h1 className="pb-3">{t.titleHeader}</h1>
						<h3 className="pb-3">{t.subtitleHeader}</h3>
						<p>{t.textHeader}</p>
						<div className={`d-flex gap-4 mt-5 ${styles.btnWrapper}`}>
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
