import { useLayoutEffect, useRef } from 'react';
import styles from './scrollToTopButton.module.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import ArrowUpIcon from '../../../../assets/icons/up/circle-up-regular-full.svg';

gsap.registerPlugin(ScrollTrigger);

interface ScrollToTopButtonProps {
	lenisRef: React.RefObject<Lenis | null>;
}

const ScrollToTopButton = ({ lenisRef }: ScrollToTopButtonProps) => {
    console.log('ScrollToTopButton РЕНДЕР');
	const buttonRef = useRef<HTMLButtonElement>(null);
	const isVisibleRef = useRef(false);

	useLayoutEffect(() => {
		const button = buttonRef.current;

		if (!button) return;

		const syncVisibility = (visible: boolean) => {
			if (isVisibleRef.current === visible) return;

			isVisibleRef.current = visible;

			gsap.to(button, {
				autoAlpha: visible ? 1 : 0,
				y: visible ? 0 : 20,
				duration: visible ? 0.4 : 0.3,
				ease: visible ? 'power2.out' : 'power2.in',
				overwrite: 'auto',
			});
		};

		const shouldShowInitially = window.scrollY > 5000;
		isVisibleRef.current = shouldShowInitially;
		gsap.set(button, {
			autoAlpha: shouldShowInitially ? 1 : 0,
			y: shouldShowInitially ? 0 : 20,
		});

		const trigger = ScrollTrigger.create({
			onUpdate: (self) => {
				syncVisibility(self.scroll() > 5000);
			},
		});

		return () => {
			trigger.kill();
		};
	}, []);

	const handleClick = () => {
		if (lenisRef.current) {
			lenisRef.current.scrollTo(0, {
				duration: 1.5,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			});
		}
	};

	const handleMouseEnter = () => {
		gsap.to(buttonRef.current, {
			scale: 1.1,
			rotation: -10,
			duration: 0.3,
			ease: 'back.out(1.7)',
		});
	};

	const handleMouseLeave = () => {
		gsap.to(buttonRef.current, {
			scale: 1,
			rotation: 0,
			duration: 0.3,
			ease: 'power2.out',
		});
	};

	return (
		<button
			ref={buttonRef}
			type="button"
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={styles.btnUp}
			aria-label="Прокрутить наверх"
		>
			<img src={ArrowUpIcon} alt="Стрелка вверх" className={styles.icon} />
		</button>
	);
};

export default ScrollToTopButton;
