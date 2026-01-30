import React from 'react';

import styles from '../../widgets/news/news.module.scss';

import { Container } from 'react-bootstrap';
import News from '../news/news';

function TitleNewsSection() {
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

				<News />
			</section>
		</Container>
	);
}

export default TitleNewsSection;
