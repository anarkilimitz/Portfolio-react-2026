import gsap from 'gsap';

// Пример будущей анимации появления текста
export const fadeInUp = (element: HTMLElement | null, delay: number = 0) => {
	if (!element) return;

	return gsap.fromTo(
		element,
		{ opacity: 0, y: 30 },
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			delay,
			ease: 'power2.out',
		}
	);
};
