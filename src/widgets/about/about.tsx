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

// тег-ссылки
interface TechItem {
	name: string;
	url: string;
}

// технологии
const techStack: TechItem[] = [
	{ name: 'HTML', url: 'https://developer.mozilla.org/ru/docs/Web/HTML' },
	{ name: 'SCSS / БЭМ', url: 'https://sass-lang.com/' },
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript',
	},
	{ name: 'React', url: 'https://react.dev/' },
	{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },

	{ name: 'GSAP + Lenis', url: 'https://gsap.com/' },
	{ name: 'FSD Architecture', url: 'https://feature-sliced.design/' },
	{ name: 'WordPress + ACF', url: 'https://wordpress.org/' },
	{ name: 'REST API', url: 'https://restfulapi.net/' },
	{ name: 'Git / GitHub', url: 'https://github.com/' },
	{ name: 'Figma', url: 'https://www.figma.com/' },
	{ name: 'Vite', url: 'https://vitejs.dev/' },
	{ name: 'Vercel', url: 'https://vercel.com/' },
	{ name: 'Netlify', url: 'https://netlify.com/' },
	{ name: 'Supabase', url: 'https://supabase.com/' },
	{ name: 'Strapi', url: 'https://strapi.io/' },
];

// справочник
const resources: TechItem[] = [
	{ name: 'Yoksel Grid', url: 'https://yoksel.github.io/grid-cheatsheet/' },
	{ name: 'Yoksel Flex', url: 'https://yoksel.github.io/flex-cheatsheet/' },
	{
		name: 'Free licenses',
		url: 'https://creativecommons.org/cc-licenses/',
	},
	{ name: 'My Device', url: 'https://www.mydevice.io/' },
	{
		name: 'Animating Clip-Path',
		url: 'https://css-tricks.com/animating-with-clip-path/',
	},
	{ name: 'Stack Overflow', url: 'https://stackoverflow.com/' },
	{ name: 'CSS Box-Shadow', url: 'https://active-vision.ru/box-shadow/' },
	{ name: 'Can I Use', url: 'https://caniuse.com/' },
	{ name: 'Learn JavaScript', url: 'https://learn.javascript.ru/' },
	{ name: 'Htmlbook', url: 'https://htmlbook.ru/' },
	{ name: 'WebReference', url: 'https://webref.ru/' },
	{ name: 'Doka', url: 'https://doka.guide/' },
	{ name: 'Gradient', url: 'https://photogradient.com/' },
	{ name: 'Slick-Slider', url: 'https://kenwheeler.github.io/slick/' },
	{ name: 'Bootstrap', url: 'https://getbootstrap.com/' },
	{
		name: 'Tiny-Slider',
		url: 'https://ganlanyuan.github.io/tiny-slider/demo/#base_wrapper',
	},
	{ name: 'React Bootstrap', url: 'https://react-bootstrap.github.io/' },
	{ name: 'W3C Validate ', url: 'https://validator.w3.org/' },
	{ name: 'Rough Notation', url: 'https://roughnotation.com/' },
	{ name: 'Animate.css', url: 'https://animate.style/' },
	{ name: 'Css Loaders', url: 'https://css-loaders.com/classic/' },
	{ name: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com/' },
	{
		name: 'You Dont Know JS',
		url: 'https://github.com/azat-io/you-dont-know-js-ru',
	},
	{
		name: 'Event Loop Explorer',
		url: 'https://vault-developer.github.io/event-loop-explorer/',
	},
	{ name: 'Git-commands', url: 'https://github.com/cyberspacedk/Git-commands' },
	{ name: 'MUI React', url: 'https://mui.com/' },
	{ name: 'Ant Design', url: 'https://ant.design/' },
	{ name: 'React Router', url: 'https://reactrouter.com/' },
	{ name: 'useHooks', url: 'https://usehooks.com/' },
	{ name: 'Machina', url: 'https://machina-js.org/' },
	{ name: 'YUP', url: 'https://github.com/jquense/yup' },
	{ name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
	{ name: 'AXIOS', url: 'https://axios.rest/' },
	{ name: 'TanStack Query', url: 'https://tanstack.com/' },
];

function About() {
	const { t } = useLanguage();

	const sectionRef = useRef<HTMLElement>(null);

	// рефы для анимации
	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const timelineTitleRef = useRef<HTMLHeadingElement>(null);
	const skillsTitleRef = useRef<HTMLHeadingElement>(null);
	const referenceTitleRef = useRef<HTMLHeadingElement>(null);

	useScrollTypewriter(titleRef, t.titleAbout, sectionRef, {
		stagger: 0.15,
		delay: 0.1,
	});

	useScrollTypewriter(textRef, t.textAbout, sectionRef, {
		stagger: 0.004,
		delay: 0.3,
	});

	useScrollTypewriter(timelineTitleRef, 'Очень коротко', sectionRef, {
		stagger: 0.09,
		delay: 0.4,
	});

	useScrollTypewriter(skillsTitleRef, 'Технологии и инструменты', sectionRef, {
		stagger: 0.09,
		delay: 0.5,
	});

	useScrollTypewriter(referenceTitleRef, 'Справочник', sectionRef, {
		stagger: 0.09,
		delay: 0.6,
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
								{techStack.map((tech: TechItem, i: number) => (
									<a
										key={i}
										href={tech.url}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.skillTag}
									>
										{tech.name}
									</a>
								))}
							</div>
						</div>
						{/* СПРАВОЧНИК */}
						<div className={styles.skillsSection}>
							<h3 ref={referenceTitleRef} className={styles.skillsTitle}>
								Справочник
							</h3>
							<div className={styles.skillsGrid}>
								{resources.map((resource: TechItem, i: number) => (
									<a
										key={i}
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`${styles.skillTag} ${styles.resourceTag}`}
									>
										{resource.name}
									</a>
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
