import React from 'react';
import styles from './projects.module.scss';

import { Container, Row, Col, Accordion } from 'react-bootstrap';

import projectsImg from '../../assets/img/PlatziBg.png';

function Projects() {
	return (
		<Container className="mt-5 mb-5">
			<section className={styles.projects}>
				<div className={`text-white pt-5 ${styles.titleProjects}`}>
					<h1>Projects</h1>
				</div>
				<Row className="mt-5 align-items-start">
					{/* левая колонка */}
					<Col lg={7}>
						<Accordion className="mt-5">
							<Accordion.Item eventKey="0">
								<Accordion.Header>E-commerce Store</Accordion.Header>
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
										href="https://platzi-store-sable.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Project
									</a>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>E-commerce Store</Accordion.Header>
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
										href="https://platzi-store-sable.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Project
									</a>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>E-commerce Store</Accordion.Header>
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
										href="https://platzi-store-sable.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Project
									</a>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="3">
								<Accordion.Header>E-commerce Store</Accordion.Header>
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
										href="https://platzi-store-sable.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Project
									</a>
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<Accordion.Header>E-commerce Store</Accordion.Header>
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
										href="https://platzi-store-sable.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Project
									</a>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
					{/* картинка справа*/}
					<Col lg={5} className="mt-4 mt-lg-0">
						<div className={styles.projectsImage}>
							<img src={projectsImg} alt="Preview" />
						</div>
					</Col>
				</Row>
			</section>
		</Container>
	);
}

export default Projects;
