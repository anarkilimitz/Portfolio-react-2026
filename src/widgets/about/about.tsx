import React, { useEffect, useRef } from 'react';
import styles from './about.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import aboutImag from '../../assets/img/PortfolioBgColor390Deg.jpg';
import { useLanguage } from '../../shared/i18n/languageContext';
import { animateTypewriter } from '../../shared/lib/animations/textAnimations';

gsap.registerPlugin(ScrollTrigger);

function About() {
	const { t } = useLanguage();

	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const title = titleRef.current;
		const text = textRef.current;
		if (!title || !text) return;

		let titleCleanup: (() => void) | undefined;
		let textCleanup: (() => void) | undefined;

		gsap.set([title, text], { opacity: 0, visibility: 'hidden' });

		const trigger = ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top 100%',
			once: false,
			onEnter: () => {
				gsap.set([title, text], { opacity: 1, visibility: 'visible' });

				title.textContent = t.titleAbout;
				titleCleanup = animateTypewriter(title, {
					stagger: 0.15,
					delay: 0.1,
				});

				text.textContent = t.textAbout;
				textCleanup = animateTypewriter(text, {
					stagger: 0.004,
					delay: 0.3,
				});
			},
		});

		return () => {
			trigger.kill();
			titleCleanup?.();
			textCleanup?.();
		};
	}, [t]);

	return (
		<Container className="mt-5 mb-5">
			<section
				ref={sectionRef}
				className={`min-vh-100 d-flex align-items-stretch ${styles.about}`}
			>
				<Row
					className={`p-5 g-0 min-vh-100 align-items-center ${styles.aboutWrapper}`}
				>
					<Col xl={5}>
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
					</Col>

					<Col xl={7}>
						<div className={`ps-lg-5 ${styles.contentSection}`}>
							<p ref={textRef} className="lead mb-4">
								{t.textAbout}
							</p>
						</div>
					</Col>
				</Row>
			</section>
		</Container>
	);
}

export default About;
