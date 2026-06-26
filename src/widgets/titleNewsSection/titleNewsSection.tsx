import { useRef } from 'react';
import styles from '../../widgets/news/news.module.scss';

import { useScrollTypewriter } from '../../shared/hooks/useScrollTypewriter';

import { Container } from 'react-bootstrap';
import News from '../news/news';

import { useLanguage } from '../../shared/i18n/languageContext';

function TitleNewsSection() {
	const { t } = useLanguage();

	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleTextRef = useRef<HTMLSpanElement>(null);

	useScrollTypewriter(titleRef, t.titleNews, sectionRef, {
		stagger: 0.05,
		delay: 0.2,
	});

	useScrollTypewriter(subtitleTextRef, t.poweredBy, sectionRef, {
		stagger: 0.03,
		delay: 0.5,
	});

	return (
		<Container className="mt-5 mb-5">
			<section ref={sectionRef} className={styles.news}>
				<div className={`text-white ${styles.titleNews}`}>
					<h1 ref={titleRef} className={styles.title}>
						{t.titleNews}
					</h1>
					<h2 className={styles.subtitle}>
						<span ref={subtitleTextRef}>{t.poweredBy}</span>{' '}
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
