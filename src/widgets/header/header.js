import React from 'react';
import styles from './header.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

import backgroundImage from '../../assets/img/PortfolioBGcorrect.jpg';

function Header() {
	return (
		<header className="min-vh-100 d-flex align-items-stretch bg-black">
			<Container fluid className="p-0 h-100">
				<Row className="g-0 h-100">
					{/* левая */}
					<Col
						md={7}
						className="bg-black d-flex align-items-center justify-content-center"
					>
						<div className={styles.promo}>
							<h1>Hi, I am Evgeniy</h1>
							<h2>JavaScript and React Developer</h2>
							<h3>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
								excepturi ad in similique qui animi nesciunt sint magni, harum,
								adipisci tenetur hic? Vero laudantium qui quisquam in magnam
								accusamus excepturi.
							</h3>
						</div>
					</Col>
					{/* правая */}
					<Col
						md={5}
						className="min-vh-100 d-flex align-items-center justify-content-center"
						style={{
							backgroundImage: `url(${backgroundImage})`,
							backgroundSize: `cover`,
							backgroundPosition: `center`,
							backgroundRepeat: `no-repeat`,
						}}
					></Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
