import React from 'react';
import styles from './news.module.scss';

import { Container, Row, Col, Accordion } from 'react-bootstrap';

function News() {
	return (
		<Container className="mt-5 mb-5">
			<section className={styles.news}>
				<div className={`text-white pt-5 ${styles.titleNews}`}>
					<h1>Latest News</h1>
					<h2>powered by NewsAPI</h2>
				</div>
				<Row className="mt-5 align-items-start">
					{/* левая колонка */}
					<Col lg={7}></Col>
					{/* картинка справа*/}
					<Col lg={5} className="mt-4 mt-lg-0"></Col>
				</Row>
			</section>
		</Container>
	);
}

export default News;
