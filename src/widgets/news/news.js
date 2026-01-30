import React from 'react';
import styles from './news.module.scss';

import { Row, Col, Card, Button } from 'react-bootstrap';

import { useNews } from '../../shared/hooks/useNews';

import { DNA } from 'react-loader-spinner';

import imgFallback from '../../assets/img/fallback/newsfallback.png';
import ErrorMessage from '../../shared/ui/errorMessage/errorMessage';

import { useLanguage } from '../../shared/i18n/languageContext';

function News() {
	const { news, loading, error, loadMore } = useNews();

	const { t } = useLanguage();

	if (loading && !news.length) {
		return (
			<div className={styles.loaderWrap}>
				<DNA height="100" width="100" />
			</div>
		);
	}

	if (error) return <ErrorMessage message={error} />;

	return (
		<>
			<div className={styles.newsInner}>
				<Row xs={1} md={2} className="g-4">
					{news.map((article, index) => (
						<Col key={`${article.url}-${index}`}>
							<Card className={styles.newsCard}>
								<Card.Img
									src={article.urlToImage || imgFallback}
									onError={(e) => (e.currentTarget.src = imgFallback)}
								/>
								<Card.Body>
									<Card.Title>{article.title}</Card.Title>
									<Card.Text>{article.description}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
			<Button
				onClick={loadMore}
				className={styles.newsBtn}
				variant="none"
				size="lg"
				disabled={loading}
			>
				{loading ? <DNA height="30" width="30" /> : t.loadMore}
			</Button>
		</>
	);
}

export default News;
