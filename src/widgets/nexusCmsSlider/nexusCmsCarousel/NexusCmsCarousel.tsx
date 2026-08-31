import { RefObject, useEffect, useState } from 'react';

import { nexusCmsCarouselData } from './nexusCmsCarouselData';

import styles from './nexusCmsCarousel.module.scss';

interface NexusCmsCarouselProps {
	lenisRef: RefObject<any | null>;
}

function NexusCmsCarousel({ lenisRef }: NexusCmsCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const totalSlides = nexusCmsCarouselData.length;

	const goToPrevious = () => {
		setActiveIndex((current) =>
			current === 0 ? totalSlides - 1 : current - 1
		);
	};

	const goToNext = () => {
		setActiveIndex((current) =>
			current === totalSlides - 1 ? 0 : current + 1
		);
	};

	const openFullscreen = () => {
		setIsFullscreen(true);
	};

	const closeFullscreen = () => {
		setIsFullscreen(false);
	};
	
	useEffect(() => {
		if (isFullscreen) {
			lenisRef.current?.stop();
		} else {
			lenisRef.current?.start();
		}

		return () => {
			lenisRef.current?.start();
		};
	}, [isFullscreen, lenisRef]);
	
	useEffect(() => {
		if (!isFullscreen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsFullscreen(false);
			}

			if (event.key === 'ArrowLeft') {
				setActiveIndex((current) =>
					current === 0 ? totalSlides - 1 : current - 1
				);
			}

			if (event.key === 'ArrowRight') {
				setActiveIndex((current) =>
					current === totalSlides - 1 ? 0 : current + 1
				);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isFullscreen, totalSlides]);

	const currentSlide = nexusCmsCarouselData[activeIndex];

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.carousel}>
					<button
						type="button"
						className={`${styles.control} ${styles.controlPrev}`}
						onClick={goToPrevious}
						aria-label="Previous slide"
					>
						←
					</button>

					<button
						type="button"
						className={styles.imageButton}
						onClick={openFullscreen}
						aria-label={`Open ${currentSlide.alt} fullscreen`}
					>
						<img
							src={currentSlide.image}
							alt={currentSlide.alt}
							className={styles.image}
						/>
					</button>

					<button
						type="button"
						className={`${styles.control} ${styles.controlNext}`}
						onClick={goToNext}
						aria-label="Next slide"
					>
						→
					</button>
				</div>

				<div className={styles.counter}>
					{String(activeIndex + 1).padStart(2, '0')} /{' '}
					{String(totalSlides).padStart(2, '0')}
				</div>
			</div>

			{isFullscreen && (
				<div
					className={styles.overlay}
					onClick={closeFullscreen}
					role="dialog"
					aria-modal="true"
					aria-label="Fullscreen image viewer"
				>
					<button
						type="button"
						className={styles.close}
						onClick={closeFullscreen}
						aria-label="Close fullscreen"
					>
						×
					</button>

					<button
						type="button"
						className={`${styles.fullscreenControl} ${styles.fullscreenPrev}`}
						onClick={(event) => {
							event.stopPropagation();
							goToPrevious();
						}}
						aria-label="Previous image"
					>
						←
					</button>

					<div
						className={styles.fullscreenContent}
						onClick={(event) => event.stopPropagation()}
					>
						<img
							src={currentSlide.image}
							alt={currentSlide.alt}
							className={styles.fullscreenImage}
						/>

						<div className={styles.fullscreenCounter}>
							{String(activeIndex + 1).padStart(2, '0')} /{' '}
							{String(totalSlides).padStart(2, '0')}
						</div>
					</div>

					<button
						type="button"
						className={`${styles.fullscreenControl} ${styles.fullscreenNext}`}
						onClick={(event) => {
							event.stopPropagation();
							goToNext();
						}}
						aria-label="Next image"
					>
						→
					</button>
				</div>
			)}
		</>
	);
}

export default NexusCmsCarousel;
