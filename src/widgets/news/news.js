import React from 'react';
import styles from './news.module.scss';

import { Container, Row, Col, Card } from 'react-bootstrap';

import { useNews } from '../../shared/hooks/useNews';

import { DNA } from 'react-loader-spinner';

import imgFallback from '../../assets/img/fallback/newsfallback.png';
import ErrorMessage from '../../shared/ui/errorMessage/errorMessage';

function News() {
	const { news, loading, error } = useNews();

	if (loading)
		return (
			<div className={styles.loaderWrap}>
				<DNA height="80" width="80" ariaLabel="dna-loading" />
			</div>
		);

	if (error)
		return <ErrorMessage message="Failed to load news. Try again later." />;

	if (!news.length) return <ErrorMessage message="No news available." />;

	return (
		<div className={styles.newsInner}>
			<Row xs={1} md={2} className="g-4">
				{news.map((article, idx) => (
					<Col key={idx}>
						<Card className={styles.newsCard}>
							<Card.Img
								variant="top"
								src={article.urlToImage ? article.urlToImage : imgFallback}
								onError={(e) => {
									e.currentTarget.onerror = null; // защита от зацикливания
									e.currentTarget.src = imgFallback;
								}}
								// проверка ошибки загрузки картинки
								// src={article.urlToImage || imgFallback}
								// onError={(e) => {
								// 	e.currentTarget.src = imgFallback;
								// }}
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
								<Card.Link href={article.url} target="_blank" rel="noreferrer">
									Read more
								</Card.Link>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
}

export default News;
