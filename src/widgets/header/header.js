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
	// состояние для смены цвета навбара
	const [isDark, setIsDark] = useState(false);
	// наблюдение за началом второй секции
	const sectionRef = useRef(null);

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

	// наблюдатель;
	useEffect(() => {
		const target = sectionRef.current;
		if (!target) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// entry.isIntersecting = true → вторая секция видна хотя бы частично
				setIsDark(entry.isIntersecting);
			},
			{
				root: null, // viewport
				threshold: 0.01, // чуть-чуть показалась → уже меняем
				// rootMargin: "-80px 0px 0px 0px"   // если нужно учитывать высоту навбара
			}
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Navbar
				className={`fixed-top ${styles.customNavbar} ${
					isDark ? '' : styles.darkMode
				}`}
				variant={'dark'} // меняем цвет текста иконок
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
			{/* сюда ставим ref — начало второй секции */}
			<div ref={sectionRef} id="about" className="second-section">
				{/* здесь начинается About */}
			</div>
		</>
	);
}

export default Header;
