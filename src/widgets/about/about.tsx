import { useRef } from 'react';
import styles from './about.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

import { useScrollTypewriter } from '../../shared/hooks/useScrollTypewriter';

import aboutImag from '../../assets/img/PortfolioBgColor390Deg.jpg';
import { useLanguage } from '../../shared/i18n/languageContext';

interface TimelineItem {
	year: string;
	title: string;
	desc: string;
}

function About() {
	const { t } = useLanguage();

	const sectionRef = useRef<HTMLElement>(null);

	// Рефы для анимации
	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const timelineTitleRef = useRef<HTMLHeadingElement>(null);
	const skillsTitleRef = useRef<HTMLHeadingElement>(null);

	useScrollTypewriter(titleRef, t.titleAbout, sectionRef, {
		stagger: 0.15,
		delay: 0.1,
	});

	useScrollTypewriter(textRef, t.textAbout, sectionRef, {
		stagger: 0.004,
		delay: 0.3,
	});

	useScrollTypewriter(timelineTitleRef, 'Мой путь', sectionRef, {
		stagger: 0.05,
		delay: 0.4,
	});

	useScrollTypewriter(skillsTitleRef, 'Технологии и инструменты', sectionRef, {
		stagger: 0.05,
		delay: 0.5,
	});

	return (
		<Container className="mt-5 mb-5">
			<section
				ref={sectionRef}
				className={`min-vh-100 d-flex align-items-stretch ${styles.about}`}
			>
				<Row
					className={`p-5 g-0 min-vh-100 align-items-start ${styles.aboutWrapper}`}
				>
					{/* ЛЕВАЯ КОЛОНКА */}
					<Col xl={5} className={styles.leftColumn}>
						<div className={styles.imageWrapper}>
							<img src={aboutImag} alt="About" className="img-fluid rounded" />
							<div className={`${styles.titleSection} pe-lg-5`}>
								<h1
									ref={titleRef}
									className={`${styles.title} ${styles.decoratedTitle}`}
								>
									{t.titleAbout}
								</h1>
							</div>
						</div>

						{/* ТЕХНОЛОГИИ */}
						<div className={styles.skillsSection}>
							<h3 ref={skillsTitleRef} className={styles.skillsTitle}>
								Технологии и инструменты
							</h3>

							<div className={styles.skillsGrid}>
								{[
									'React',
									'TypeScript',
									'JavaScript',
									'SCSS / БЭМ',
									'GSAP + Lenis',
									'FSD Architecture',
									'Supabase',
									'WordPress + ACF',
									'REST API',
									'Git / GitHub',
									'Figma',
								].map((tech: string, i: number) => (
									<span key={i} className={styles.skillTag}>
										{tech}
									</span>
								))}
							</div>
						</div>
					</Col>

					{/* ПРАВАЯ КОЛОНКА */}
					<Col xl={7}>
						<div className={`ps-lg-5 ${styles.contentSection}`}>
							<p ref={textRef} className={`${styles.aboutText} lead mb-5`}>
								{t.textAbout}
							</p>

							<h3 ref={timelineTitleRef} className={styles.timelineTitle}>
								Мой путь
							</h3>

							<div className={styles.timeline}>
								{(t.timeline as TimelineItem[]).map(
									(item: TimelineItem, index: number) => (
										<div key={index} className={styles.timelineItem}>
											<div className={styles.timelineMarker}></div>
											<div className={styles.timelineContent}>
												<span className={styles.timelineYear}>{item.year}</span>
												<h4 className={styles.timelineItemTitle}>
													{item.title}
												</h4>
												<p className={styles.timelineDesc}>
													{item.desc
														.split('\n')
														.map((line: string, i: number) => (
															<span key={i}>
																{line}
																{i < item.desc.split('\n').length - 1 && <br />}
															</span>
														))}
												</p>
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</Col>
				</Row>
			</section>
		</Container>
	);
}

export default About;
