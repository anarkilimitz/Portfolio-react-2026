import React from 'react';
import styles from './header.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

function Header() {
	return (
		<header className="min-vh-100 d-flex align-items-stretch bg-black">
			<Container fluid className="p-0 h-100">
				<Row className="g-0 h-100">
					{/* левая */}
					<Col
						md={6}
						className="bg-black d-flex align-items-center justify-content-center"
					>
						<div className={styles.promo}>
							<h1>I am a JavaScript and React Developer</h1>
						</div>
					</Col>
					{/* правая */}
					
				</Row>
			</Container>
		</header>
	);
}

export default Header;
