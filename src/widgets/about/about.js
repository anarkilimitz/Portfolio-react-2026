// import React from 'react';
import styles from './about.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import aboutImag from '../../assets/img/PortfolioBgColor390Deg.jpg';

import { useLanguage } from '../../shared/i18n/languageContext';

function About() {
	const { t } = useLanguage();

	return (
		<>
			<Container className="mt-5 mb-5">
				<section
					className={`min-vh-100 d-flex align-items-stretch ${styles.about}`}
				>
					<Row
						className={`p-5 g-0 min-vh-100 align-items-center ${styles.aboutWrapper}`}
					>
						{/* Левая */}
						<Col xl={5}>
							<div className={styles.imageWrapper}>
								<img
									src={aboutImag}
									alt="About"
									className="img-fluid rounded"
								/>
								<div className={`${styles.titleSection} pe-lg-5`}>
									<h1 className={`${styles.title} ${styles.decoratedTitle}`}>
										{t.titleAbout}
									</h1>
								</div>
							</div>
						</Col>

						{/* Правая */}
						<Col xl={7}>
							<div className={`ps-lg-5 ${styles.contentSection}`}>
								<p className="lead mb-4">{t.textAbout}</p>
							</div>
						</Col>
					</Row>
				</section>
			</Container>
		</>
	);
}

export default About;
