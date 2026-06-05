import styles from './news.module.scss';

import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNews } from '../../shared/hooks/useNews';

import { DNA } from 'react-loader-spinner';

import imgFallback from '../../assets/img/fallback/newsfallback.png';
import ErrorMessage from '../../shared/ui/errorMessage/errorMessage';

import { useLanguage } from '../../shared/i18n/languageContext';

interface IArticle {
	title: string;
	description: string | null;
	url: string;
	urlToImage: string | null;
}

function News() {
	const { news, loading, error, loadMore } = useNews() as {
		news: IArticle[];
		loading: boolean;
		error: string | null;
		loadMore: () => void;
	};

	const { t } = useLanguage();

	if (loading && !news.length) {
		return (
			<div className={styles.loaderWrap}>
				<DNA height="100" width="100" visible={true} ariaLabel="dna-loading" />
			</div>
		);
	}

	if (error) return <ErrorMessage message={error} />;

	return (
		<>
			<div className={styles.newsInner}>
				<Row xs={1} md={2} className="g-4">
					{news.map((article: IArticle, index: number) => (
						<Col key={`${article.url}-${index}`}>
							<Card className={styles.newsCard}>
								<Card.Img
									src={article.urlToImage || imgFallback}
									onError={(
										e: React.SyntheticEvent<HTMLImageElement, Event>
									) => {
										e.currentTarget.src = imgFallback;
									}}
								/>
								<Card.Body>
									<Card.Title className={styles.cardTitle}>
										{article.title}
									</Card.Title>
									<Card.Text className={styles.cardText}>
										{article.description || 'No description available.'}
									</Card.Text>
								</Card.Body>
								<Card.Body>
									<Card.Link
										href={article.url}
										target="_blank"
										rel="noreferrer"
										className={styles.customLink}
									>
										{t.btnViewNews}
									</Card.Link>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>

			{news.length > 0 && (
				<Button
					onClick={loadMore}
					className={styles.newsBtn}
					variant="none"
					size="lg"
					disabled={loading}
				>
					{loading ? <DNA height="30" width="30" /> : t.loadMore}
				</Button>
			)}
		</>
	);
}
export default News;
