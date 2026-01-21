import React from 'react';
import styles from './about.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import aboutImag from '../../assets/img/PortfolioBgColor390Deg.jpg';

function About() {
	return (
		<>
			<Container className="mt-5 mb-5">
				<section
					className={`min-vh-100 d-flex align-items-stretch ${styles.about}`}
				>
					<Row className="p-5 g-0 min-vh-100">
						{/* Левая */}
						<Col md={5}>
							<div className={styles.imageWrapper}>
								<img
									src={aboutImag}
									alt="About"
									className="img-fluid rounded"
								/>
								<div className={`${styles.titleSection} pe-lg-5`}>
									<h1 className={`${styles.title} ${styles.decoratedTitle}`}>
										ABOUT
									</h1>
								</div>
							</div>
						</Col>

						{/* Правая */}
						<Col md={7}>
							<div className={`ps-lg-5 ${styles.contentSection}`}>
								<p className="lead mb-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis natus et sit obcaecati dicta tempora fugit qui
									aspernatur autem? Quasi suscipit voluptatibus eveniet illum,
									dolores dolore vero dignissimos! Alias, ad. Lorem ipsum dolor
									sit amet, consectetur adipisicing elit. Molestias sint hic
									esse quisquam incidunt dicta? Aliquid qui cum consequuntur,
									earum, nisi optio illo laudantium quod nobis ab,
									exercitationem esse at?
								</p>
								<p className="mb-0">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis natus et sit obcaecati dicta tempora fugit qui
									aspernatur autem? Quasi suscipit voluptatibus eveniet illum,
									dolores dolore vero dignissimos! Alias, ad. Lorem ipsum dolor
									sit amet, consectetur adipisicing elit. Molestias sint hic
									esse quisquam incidunt dicta? Aliquid qui cum consequuntur,
									earum, nisi optio illo laudantium quod nobis ab,
									exercitationem esse at?
								</p>
							</div>
						</Col>
					</Row>
				</section>
			</Container>
		</>
	);
}

export default About;
