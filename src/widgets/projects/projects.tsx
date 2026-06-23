import { useState, useRef } from 'react';
import styles from './projects.module.scss';

import { Container, Row, Col, Accordion } from 'react-bootstrap';

import { useScrollTypewriter } from '../../shared/hooks/useScrollTypewriter';

import projectsImg1 from '../../assets/img/projects/Screenshot_23.png';
import projectsImg2 from '../../assets/img/projects/Screenshot_20.png';
import projectsImg3 from '../../assets/img/projects/umffz.png';
import projectsImg4 from '../../assets/img/projects/uploader.png';
import projectsImg5 from '../../assets/img/projects/Screenshot_24.png';

import { useLanguage } from '../../shared/i18n/languageContext';

function Projects() {
	const { t } = useLanguage();

	const [activeKey, setActiveKey] = useState<string | null>('0'); // состояние ключа активного аккордеона

	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	// анимация
	useScrollTypewriter(titleRef, t.projects, sectionRef, {
		stagger: 0.07,
		delay: 0.2,
	});

	const projectImages: Record<string, string> = {
		0: projectsImg1,
		1: projectsImg2,
		2: projectsImg3,
		3: projectsImg4,
		4: projectsImg5,
	};

	const handleSelect = (key: string | null) => {
		setActiveKey(key);
	};

	return (
		<Container className="mt-5 mt-md-0 mb-5">
			<section ref={sectionRef} className={styles.projects}>
				<div className={`text-white pt-5 ${styles.titleProjects}`}>
					<h1 ref={titleRef} className={styles.title}>
						{t.projects}
					</h1>
				</div>
				<Row className="mt-5 align-items-stretch">
					{/* левая колонка */}
					<Col lg={7} className={styles.leftCol}>
						<Accordion
							className={`mt-5 ${styles.customAccordion}`}
							activeKey={activeKey}
							onSelect={handleSelect}
						>
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									{t.titleAccordionProjects}
									<span className="icon"></span>
								</Accordion.Header>
								<Accordion.Body>
									{t.subtitleAccordionProjects}
									<ul className="mt-3">
										<li>React 19</li>
										<li>Redux Toolkit + React Redux</li>
										<li>React Router DOM</li>
										<li>Axios</li>
										<li>SCSS modules</li>
										<li>Normalize.css</li>
										<li>Platzi Fake Store API</li>
									</ul>
									<ul className={`mt-3 ${styles.linksList}`}>
										<li>
											<a
												className={styles.customLink}
												href="https://platzi-store-sable.vercel.app/"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t.linksProject}
											</a>
										</li>
										<li>
											<a
												className={styles.customLink}
												href="https://github.com/anarkilimitz/platzi-store"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t.linksProjectToGit}
											</a>
										</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									{t.titleAccordionPortfolio}
									<span className="icon"></span>
								</Accordion.Header>
								<Accordion.Body>
									{t.subtitleAccordionPortfolio}
									<ul className="mt-3">
										<li>HTML</li>
										<li>SCSS modules</li>
										<li>JS</li>
										<li>Vite</li>
										<li>FSD</li>
										<li>Gsap / Lenis</li>
										<li>Custom animation</li>
									</ul>
									<ul className={`mt-3 ${styles.linksList}`}>
										<li>
											<a
												className={styles.customLink}
												href="https://designer.pavlenok.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t.linksProject}
											</a>
										</li>
										<li>
											<a
												className={styles.customLink}
												href="https://github.com/anarkilimitz/kochurov-portfolio"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t.linksProjectToGit}
											</a>
										</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									{t.titleAccordionUmffz}
									<span className="icon"></span>
								</Accordion.Header>
								<Accordion.Body>
									{t.subtitleAccordionUmffz}
									<ul className="mt-3">
										<li>HTML</li>
										<li>CSS</li>
										<li>JS</li>
										<li>Normalize.css</li>
										<li>Google Sheets</li>
									</ul>
									<ul className={`mt-3 ${styles.linksList}`}>
										<li>
											<a
												className={styles.customLink}
												href="https://anarkilimitz.github.io/UMFFZ-2025-to-git"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t.linksProject}
											</a>
										</li>
										<li>
											<a
												className={styles.customLink}
												href="https://github.com/anarkilimitz/UMFFZ-2025-to-git"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t.linksProjectToGit}
											</a>
										</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header>
									{t.titleAccordionUploader}
									<span className="icon"></span>
								</Accordion.Header>

								<Accordion.Body>
									{t.subtitleAccordionUploader}
									<ul className="mt-3">
										<li>Backend: Node.js, Express, AWS SDK</li>
										<li>Frontend: Vanilla JavaScript (Fetch API, FormData)</li>
										<li>Sharp</li>
										<li>Yandex Object Storage</li>
										<li>AWS Lambda Serverless</li>
									</ul>
									<ul className={`mt-3 ${styles.linksList}`}>
										<li>
											<a
												className={styles.customLink}
												href="https://github.com/anarkilimitz/photo-uploader"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t.linksProjectToGit}
											</a>
										</li>
									</ul>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<Accordion.Header>
									E-commerce Store
									<span className="icon"></span>
								</Accordion.Header>
								<Accordion.Body>
									An online store application powered by the Platzi Fake Store
									API.
									<ul className="mt-3">
										<li>React 19</li>
										<li>Redux Toolkit + React Redux</li>
										<li>React Router DOM</li>
										<li>Axios</li>
										<li>SCSS modules</li>
										<li>Normalize.css</li>
										<li>Platzi Fake Store API</li>
									</ul>
									<a
										className={styles.customLink}
										href="https://platzi-store-sable.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t.linksProject}
									</a>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>

					{/* картинка справа*/}
					<Col
						lg={5}
						className={`mt-lg-0 d-flex align-items-stretch ${styles.imageCol}`}
					>
						{activeKey && projectImages[activeKey] && (
							<div key={activeKey} className={styles.projectsImage}>
								<img src={projectImages[activeKey]} alt="Preview" />

								<div className={styles.imageOverlay}>
									{/* рамка */}
									<div className={styles.decorBorder}></div>

									{/* мелкие подписи */}
									<div className={styles.overlayTop}>
										<span className={styles.overlayLabel}>PORTFOLIO 2025</span>
										<div className={styles.overlayLine}></div>
									</div>

									{/* контент */}
									<div className={styles.overlayContent}>
										<span className={styles.overlayTag}>Featured Work</span>
										<h2>
											CREATIVE
											<br />
											WEB
											<br />
											SOLUTIONS
										</h2>
										<p>
											Take a look at modern interfaces and technological
											solutions created with attention to detail.
										</p>
									</div>

									{/* Нижние элементы и теги */}
									<div className={styles.overlayBottom}>
										<div className={styles.techTags}>
											<span>HTML</span>
											<span>JS</span>
											<span>SCSS</span>
											<span>React</span>
											<span>Redux</span>
										</div>
									</div>

									{/* круги и элементы */}
									<div className={styles.decorCircle}></div>
									<div className={styles.decorPlus}>+</div>
									<div className={styles.decorDots}></div>
								</div>
							</div>
						)}
					</Col>
				</Row>
			</section>
		</Container>
	);
}

export default Projects;
