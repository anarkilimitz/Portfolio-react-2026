import { gsap } from 'gsap';
import SplitType from 'split-type';

type CleanupFn = () => void;

export const animateTypewriter = (
	element: HTMLElement | null,
	options: {
		stagger?: number;
		delay?: number;
		duration?: number;
	} = {}
): CleanupFn | undefined => {
	if (!element) return undefined;

	const originalText = element.textContent || '';
	
	element.innerHTML = originalText;

	const split = new SplitType(element, {
		types: 'chars,words',
		tagName: 'span',
	});

	if (!split.chars || split.chars.length === 0) {
		return undefined;
	}

	gsap.set(split.chars, { opacity: 0 });

	gsap.to(split.chars, {
		opacity: 1,
		stagger: options.stagger ?? 0.055,
		duration: options.duration ?? 0.035,
		ease: 'none',
		delay: options.delay ?? 0.1,
	});

	return () => {
		split.revert();
		if (element) element.textContent = originalText;
	};
};
