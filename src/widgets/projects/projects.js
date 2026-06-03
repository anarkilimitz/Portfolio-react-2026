import React, { useState } from 'react';
import styles from './projects.module.scss';

import { Container, Row, Col, Accordion } from 'react-bootstrap';

import projectsImg1 from '../../assets/img/projects/PlatziBg.png';
import projectsImg2 from '../../assets/img/projects/Screenshot_16.png';
import projectsImg3 from '../../assets/img/projects/Screenshot_17.png';
import projectsImg4 from '../../assets/img/projects/Screenshot_18.png';
import projectsImg5 from '../../assets/img/projects/Screenshot_19.png';

import { useLanguage } from '../../shared/i18n/languageContext';

function Projects() {
	const { t } = useLanguage();

	const [activeKey, setActiveKey] = useState('0'); // состояние ключа активного аккордеона

	const projectImages = {
		0: projectsImg1,
		1: projectsImg2,
		2: projectsImg3,
		3: projectsImg4,
		4: projectsImg5,
	};

	const handleSelect = (key) => {
		setActiveKey(key);
	};

	return (
		<Container className="mt-5 mb-5">
			<section className={styles.projects}>
				<div className={`text-white pt-5 ${styles.titleProjects}`}>
					<h1 className={styles.title}>{t.projects}</h1>
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
							<Accordion.Item eventKey="1">
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
							<Accordion.Item eventKey="2">
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
							<Accordion.Item eventKey="3">
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
						{activeKey && (
							<div className={styles.projectsImage}>
								<img
									key={activeKey}
									src={projectImages[activeKey]}
									alt="Preview"
								/>
								<div className={styles.imageOverlay}>
									<h2>Интересные проекты</h2>
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
