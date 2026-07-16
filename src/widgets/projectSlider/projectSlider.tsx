import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

import SliderBlock from '../sliderBlock/SliderBlock';
import {
	getSliderData,
	ISliderItem,
} from '../sliderBlock/sliderData/sliderData';

import styles from './projectSlider.module.scss';
import { useScrollTypewriter } from '../../shared/hooks/useScrollTypewriter';
import { useLanguage } from '../../shared/i18n/languageContext';

interface ProjectItemProps {
	item: ISliderItem;
	index: number;
}

// --- Компонент одного проекта ---
const ProjectItem: React.FC<ProjectItemProps> = ({ item, index }) => {
	const isEven = index % 2 === 0;

	const sectionRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);

	// анимация
	useScrollTypewriter(titleRef, item.title, sectionRef, {
		stagger: 0.05,
		delay: 0.1,
	});

	useScrollTypewriter(textRef, item.text, sectionRef, {
		stagger: 0.01,
		delay: 0.3,
	});

	const { t } = useLanguage();

	return (
		// Обертка div нужна, так как Row из Bootstrap не принимает ref напрямую
		<div ref={sectionRef} className="mb-5 mb-lg-6">
			<Row className="g-4 g-lg-5">
				{/* левая колонка */}
				<Col
					xs={12}
					lg={6}
					className={`
                        ${isEven ? '' : 'order-lg-2'}
                        align-self-lg-start 
                        sticky-lg-top 
                        ${styles.stickyTextCol}
                    `.trim()}
				>
					<div className={isEven ? 'pe-lg-4 pe-xl-5' : 'ps-lg-4 ps-xl-5'}>
						<h2 ref={titleRef} className="mb-3 mb-lg-4 fw-bold"></h2>

						<p ref={textRef} className="lead text-muted mb-0"></p>

						{/* Бейджики */}
						<div className="mt-4">
							{item.tags &&
								item.tags.map((tag, tagIndex) => (
									<span key={tagIndex} className={`badge bg-${tag.bg} me-2`}>
										{tag.text}
									</span>
								))}
						</div>

						{/* Ссылки */}
						<div className="mt-4 mt-lg-5">
							{item.link && (
								<div>
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className={`icon-link icon-link-hover text-decoration-none fw-semibold ${styles.customLinkSlider}`}
									>
										{t.linksProject}
										<span className="bi mb-2 ms-2" aria-hidden="true">
											&rarr;
										</span>
									</a>
								</div>
							)}
						</div>

						<div className="mt-3 mt-lg-3">
							{item.linkGit && (
								<div>
									<a
										href={item.linkGit}
										target="_blank"
										rel="noopener noreferrer"
										className={`icon-link icon-link-hover text-decoration-none fw-semibold ${styles.customLinkSlider}`}
									>
										{t.linksProjectToGit}
										<span className="bi mb-2 ms-2" aria-hidden="true">
											&rarr;
										</span>
										<FaGithub style={{ marginLeft: '15px' }} />
									</a>
								</div>
							)}
						</div>
					</div>
				</Col>

				{/* правая колонка */}
				<Col xs={12} lg={6} className={isEven ? 'order-lg-2' : 'order-lg-1'}>
					<SliderBlock
						image={item.image}
						commit={item.commit}
						description={item.description}
					/>
				</Col>
			</Row>
		</div>
	);
};

// основной еомпонент
function ProjectSlider() {
	const { t } = useLanguage();
	// вызываю функцию, передавая текущий язык
	const sliderData = getSliderData(t);

	return (
		<Container className="pt-5 pb-4 pb-md-5 pb-lg-0">
			{sliderData.map((item, index) => (
				<ProjectItem key={item.id} item={item} index={index} />
			))}
		</Container>
	);
}

export default ProjectSlider;
