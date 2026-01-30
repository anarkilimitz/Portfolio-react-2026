import React from 'react';

import styles from '../../widgets/news/news.module.scss';

import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import News from '../news/news';

import { useState } from 'react';

function TitleNewsSection() {
	const [newsCount, setNewsCount] = useState(2);
	const [totalNews, setTotalNews] = useState(0);

	const loadMore = () => {
		setNewsCount((prev) => prev + 2);
	};

	return (
		<Container className="mt-5 mb-5">
			<section className={styles.news}>
				<div className={`text-white pt-5 ${styles.titleNews}`}>
					<h1 className={styles.title}>Latest News</h1>
					<h2 className={styles.subtitle}>
						Powered by{' '}
						<a href="https://newsapi.org/" target="_blank" rel="noreferrer">
							<span>NewsAPI</span>
						</a>
					</h2>
				</div>

				<News newsCount={newsCount} onTotalChange={setTotalNews} />

				{newsCount < totalNews && (
					<Button
						onClick={() => setNewsCount((prev) => prev + 2)}
						variant="none"
						className={styles.newsBtn}
						size="lg"
					>
						Load More
					</Button>
				)}
			</section>
		</Container>
	);
}

export default TitleNewsSection;
