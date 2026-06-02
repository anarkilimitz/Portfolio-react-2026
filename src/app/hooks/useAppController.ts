import { useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { useSmoothScroll } from '../../shared/hooks/useSmoothScroll';

export const useAppController = () => {
	// плавный скролл
	const lenisRef = useSmoothScroll();

	// Рефы для секций
	const aboutRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);

	// Функция прокрутки к проектам
	const scrollToProjects = useCallback(() => {
		if (lenisRef.current && projectsRef.current) {
			lenisRef.current.scrollTo(projectsRef.current, {
				offset: -80, // Отступ для хедера
				duration: 1.7,
			});
		}
	}, []);

	return {
		refs: {
			aboutRef,
			projectsRef,
			bottomRef,
		},
		actions: {
			scrollToProjects,
		},
	};
};
