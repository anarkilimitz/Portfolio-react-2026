import React, { useRef, useEffect } from 'react';
import styles from './carousel3D.module.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Обязательно импортируем!

import { carouselData } from './data/carouselData';

import { Container } from 'react-bootstrap';
import { useScrollTypewriter } from '../../shared/hooks/useScrollTypewriter';

import { useLanguage } from '../../shared/i18n/languageContext';

gsap.registerPlugin(ScrollTrigger); // Регистрация здесь обязательна

const Carousel3D: React.FC = () => {
	const sceneRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const titleRef = useRef<HTMLHeadingElement>(null);

	const { t } = useLanguage();

	useScrollTypewriter(titleRef, t.moreProjects, sceneRef, {
		stagger: 0.05,
		delay: 0.2,
	});

	useEffect(() => {
		if (!wrapperRef.current || !sceneRef.current) return;

		const tween = gsap.to(wrapperRef.current, {
			rotateY: 360,
			ease: 'none',
			scrollTrigger: {
				trigger: sceneRef.current,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			},
		});

		return () => {
			tween.kill();
		};
	}, []);

	return (
		<section className={styles.scene} ref={sceneRef}>
			<Container>
				<h2 ref={titleRef} className={styles.titleMore}>
					{t.moreProjects}
				</h2>
			</Container>

			<div
				className={styles.a3d}
				ref={wrapperRef}
				style={{ '--n': carouselData.length } as React.CSSProperties}
			>
				{carouselData.map((item, index) => (
					<a
						key={item.id}
						href={item.link || '#'}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
						style={{ '--i': index } as React.CSSProperties}
					>
						<img
							src={item.imageUrl}
							alt={item.alt || 'Project'}
							className={styles.cardImage}
						/>

						{/* появляется при наведении */}
						{item.title && (
							<div className={styles.cardOverlay}>
								<h3 className={styles.cardTitle}>{item.title}</h3>
							</div>
						)}
					</a>
				))}
			</div>
		</section>
	);
};

export default Carousel3D;
