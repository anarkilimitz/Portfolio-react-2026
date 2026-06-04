import React, { RefObject, useEffect, useRef } from 'react';
import styles from './header.module.scss';

import { animateTypewriter } from '../../shared/lib/animations/textAnimations';

import { Container, Navbar, Nav, Button } from 'react-bootstrap';

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

// Интерфейс пропсов. Важно добавить | null в дженерик RefObject
interface HeaderProps {
	aboutRef: RefObject<HTMLDivElement | null>;
	bottomRef: RefObject<HTMLDivElement | null>;
	onProjectsClick?: () => void;
	onAboutClick?: () => void;
	onContactsClick?: () => void;
}

export default function Header({
	aboutRef,
	bottomRef,
	onProjectsClick,
	onAboutClick,
	onContactsClick,
}: HeaderProps) {
	const { t } = useLanguage();

	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);

	// анимации
	useEffect(() => {
		let cleanups: Array<(() => void) | undefined> = [];
		
		const timer = setTimeout(() => {
			
			if (titleRef.current) titleRef.current.textContent = t.titleHeader;
			if (subtitleRef.current)
				subtitleRef.current.textContent = t.subtitleHeader;
			if (textRef.current) textRef.current.textContent = t.textHeader;

			cleanups.push(
				animateTypewriter(titleRef.current, {
					stagger: 0.07,
					delay: 0.1,
				})
			);

			cleanups.push(
				animateTypewriter(subtitleRef.current, {
					stagger: 0.045,
					delay: 0.7,
				})
			);

			cleanups.push(
				animateTypewriter(textRef.current, {
					stagger: 0.038,
					delay: 1.3,
				})
			);
		}, 50);

		return () => {
			clearTimeout(timer);
			cleanups.forEach((cleanup) => cleanup?.());
		};
	}, [t]);

	const { expanded, setExpanded, isDark, isHidden, navbarRef, closeNavbar } =
		useNavbarBehavior({
			aboutRef,
			bottomRef,
		} as any); // временное решение, если хук в JS

	// Обработчик клика по About
	const handleAboutClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		if (onAboutClick) {
			onAboutClick();
		}
		closeNavbar();
	};

	// Обработчик клика по Project
	const handleProjectsClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		if (onProjectsClick) {
			onProjectsClick();
		}
		closeNavbar();
	};

	// Обработчик клика по Контакты
	const handleContactsClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		onContactsClick?.();
		closeNavbar();
	};

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
								onClick={handleAboutClick}
							>
								{t.about}
							</Nav.Link>

							<Nav.Link
								href="#projects"
								className={styles.navbarNavLink}
								onClick={handleProjectsClick}
							>
								{t.projects}
							</Nav.Link>

							<Nav.Link
								href="#contacts"
								className={styles.navbarNavLink}
								onClick={handleContactsClick}
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
						<h1 ref={titleRef} className="mb-0">
							{t.titleHeader}
						</h1>
						<h3 ref={subtitleRef} className="mb-2 mb-sm-5">
							{t.subtitleHeader}
						</h3>
						<p ref={textRef} className="pt-3 pt-sm-2 pt-md-1">
							{t.textHeader}
						</p>

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
