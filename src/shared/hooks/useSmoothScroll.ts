import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
		});

		lenisRef.current = lenis;

		lenis.on('scroll', ScrollTrigger.update);

		const handleRaf = (time: number) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(handleRaf);

		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(handleRaf);
			lenis.destroy();
			lenisRef.current = null;
			// Убиваем все ScrollTrigger при уходе со страницы (опционально, но полезно для SPA)
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return lenisRef;
};
