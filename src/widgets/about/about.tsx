import { useRef } from 'react';
import styles from './about.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

import { useScrollTypewriter } from '../../shared/hooks/useScrollTypewriter';

import aboutImag from '../../assets/img/PortfolioBgColor390Deg.jpg';
import { useLanguage } from '../../shared/i18n/languageContext';
 
function About() {
	const { t } = useLanguage();

	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const sectionRef = useRef<HTMLElement>(null);

	// анимация
	useScrollTypewriter(titleRef, t.titleAbout, sectionRef, {
		stagger: 0.15,
		delay: 0.1,
	});

	useScrollTypewriter(textRef, t.textAbout, sectionRef, {
		stagger: 0.004,
		delay: 0.3,
	});

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
