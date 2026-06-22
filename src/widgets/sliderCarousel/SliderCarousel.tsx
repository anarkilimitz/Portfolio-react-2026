import { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap';

interface SliderCarouselProps {
	mode: 'IMAGE' | 'DETAILS' | string;
	imageSrc: string;
	commit: string;
	description: string;
}

function SliderCarousel({ mode, imageSrc, commit, description }: SliderCarouselProps) {
	const carouselRef = useRef<HTMLDivElement>(null);
	const carouselApiRef = useRef<Carousel | null>(null);

	// init Bootstrap Carousel
	useEffect(() => {
		const refElement = carouselRef.current;
		if (!refElement) return;

		carouselApiRef.current = new Carousel(refElement, {
			interval: false,
			ride: false,
			touch: true,
		});

		return () => {
			carouselApiRef.current?.dispose();
			carouselApiRef.current = null;
		};
	}, []);

	// переключение IMAGE / DETAILS
	useEffect(() => {
		if (!carouselApiRef.current) return;

		carouselApiRef.current.to(mode === 'IMAGE' ? 0 : 1);
	}, [mode]);

	return (
		<div ref={carouselRef} className="carousel slide mb-4">
			<div className="carousel-inner">
				{/* IMAGE */}
				<div className="carousel-item active">
					<img src={imageSrc} className="d-block w-100" alt="Project image" />
				</div>

				{/* DETAILS */}
				<div className="carousel-item">
					<div className="p-4">
						<h4>{commit}</h4>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SliderCarousel;
