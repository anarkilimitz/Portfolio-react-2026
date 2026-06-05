import { useEffect, RefObject } from 'react';
import { animateTypewriter } from '../lib/animations/textAnimations';

interface TypewriterOptions {
	stagger?: number;
	delay?: number;
	duration?: number;
}

/**
 * Автоматически выставляет текст и очищает анимацию при размонтировании.
 *
 * @param ref - Ссылка на DOM-элемент
 * @param text - Текст для анимации
 * @param options - Настройки анимации (stagger, delay, duration)
 * @param startDelay - Задержка перед началом (в мс), заменяет setTimeout
 */
export const useTypewriter = (
	ref: RefObject<HTMLElement | null>,
	text: string,
	options: TypewriterOptions = {},
	startDelay: number = 0
) => {
	useEffect(() => {
		if (!ref.current) return;

		const element = ref.current;
		let cleanup: (() => void) | undefined;
		let timer: ReturnType<typeof setTimeout>;

		const runAnimation = () => {
			// Устанавливаем текст перед анимацией
			element.textContent = text;
			// Запускаем анимацию и сохраняем функцию очистки
			cleanup = animateTypewriter(element, options);
		};

		// Если нужна задержка старта (как setTimeout в оригинале)
		if (startDelay > 0) {
			timer = setTimeout(runAnimation, startDelay);
		} else {
			runAnimation();
		}

		return () => {
			clearTimeout(timer);
			cleanup?.();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text, ref]); // options и startDelay опущены намеренно, чтобы избежать реинициализации при рендере родителя, если они не меняются существенно
};
