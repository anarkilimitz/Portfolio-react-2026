import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateTypewriter } from '../lib/animations/textAnimations';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTypewriterOptions {
	stagger?: number;
	delay?: number;
	duration?: number;
}

/**
 * Хук для анимации текста при появлении элемента во вьюпорте (ScrollTrigger).
 *
 * @param ref - Ссылка на анимируемый элемент
 * @param text - Текст
 * @param triggerRef - Ссылка на секцию-триггер
 * @param options - Настройки анимации
 */
export const useScrollTypewriter = (
	ref: RefObject<HTMLElement | null>,
	text: string,
	triggerRef: RefObject<HTMLElement | null>,
	options: ScrollTypewriterOptions = {}
) => {
	useEffect(() => {
		const element = ref.current;
		const triggerElement = triggerRef.current;
		if (!element || !triggerElement) return;

		let cleanup: (() => void) | undefined;
		
		gsap.set(element, { opacity: 0, visibility: 'hidden' });

		const trigger = ScrollTrigger.create({
			trigger: triggerElement,
			start: 'top 100%',
			once: false,
			onEnter: () => {
				// Если анимация уже запускалась, чистим предыдущий инстанс
				cleanup?.();

				// Показываем элемент
				gsap.set(element, { opacity: 1, visibility: 'visible' });

				// Обновляем текст (важно при смене языка)
				element.textContent = text;

				// Запускаем печать
				cleanup = animateTypewriter(element, options);
			},
		});

		return () => {
			trigger.kill();
			cleanup?.();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text, ref, triggerRef]);
};
