import React from 'react';
import styles from './footer.module.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterExample() {
	return (
		<footer className={`${styles.footer} bg-dark text-white py-4`}>
			<Container>
				<Row>
					<Col md={4}>
						<h5>I am a React Developer</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
							quis rem.
						</p>
					</Col>
					<Col md={{ span: 4, offset: 4 }}>
						<h5>Контакты</h5>
						<p>Email: info@example.com</p>
						<p>Телефон: +7 (123) 456-78-90</p>
					</Col>
				</Row>
				<Row>
					<Col md={{ span: 3, offset: 3 }}>
						<h5>Перейти</h5>
						<ul>
							<li>
								<a href="#" className="text-white">
									Главная
								</a>
							</li>
							<li>
								<a href="#" className="text-white">
									Портфолио
								</a>
							</li>
							<li>
								<a href="#" className="text-white">
									Контакты
								</a>
							</li>
						</ul>
					</Col>
					<Col md={{ span: 3, offset: 3 }}>
						<h5>Социальные сети</h5>
						<ul>
							<li>
								<a href="#" className="text-white">
									Twitter
								</a>
							</li>
							<li>
								<a href="#" className="text-white">
									Facebook
								</a>
							</li>
							<li>
								<a href="#" className="text-white">
									Instagram
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col md={{ span: 6, offset: 3 }} className="text-center">
						<p className="mt-3">
							&copy; 2025 Portfolio Website. All rights reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default FooterExample;
