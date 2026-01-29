import React from 'react';
import styles from './news.module.scss';

import { Container, Row, Col, Card } from 'react-bootstrap';

import { useNews } from '../../shared/hooks/useNews';

import { DNA } from 'react-loader-spinner';

function News() {
	const { news, loading, error } = useNews();

	// if (loading) return <p>Загрузка новостей...</p>;

	if (loading)
		return (
			<div className={styles.loaderWrap}>
				<DNA height="80" width="80" ariaLabel="dna-loading" />
			</div>
		);

	if (error) return <p>Ошибка: {error}</p>;

	return (
		<Container className="mt-5 mb-5">
			<section className={styles.news}>
				<div className={`text-white pt-5 ${styles.titleNews}`}>
					<h1>Latest News</h1>
					<h2>powered by NewsAPI</h2>
				</div>
				<Row xs={1} md={2} className="g-4">
					{news.map((article, idx) => (
						<Col key={idx}>
							<Card className={styles.newsCard}>
								<Card.Img
									variant="top"
									src={article.urlToImage || '/fallback.jpg'}
								/>

								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										{article.title}
									</Card.Title>

									<Card.Text className={styles.cardText}>
										{article.description}
									</Card.Text>
								</Card.Body>

								<Card.Body>
									<Card.Link
										href={article.url}
										target="_blank"
										rel="noreferrer"
									>
										Read more
									</Card.Link>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</section>
		</Container>
	);
}

export default News;
