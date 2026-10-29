import {
	useState,
	useEffect,
	useRef,
	useCallback,
	type RefObject,
} from 'react';

interface NavbarBehaviorOptions {
	aboutRef?: RefObject<Element | null> | null;
	bottomRef?: RefObject<Element | null> | null;
	hideOptions?: IntersectionObserverInit;
}

const DEFAULT_HIDE_OPTIONS: IntersectionObserverInit = {};

export function useNavbarBehavior({
	aboutRef = null,
	bottomRef = null,
	hideOptions = DEFAULT_HIDE_OPTIONS,
}: NavbarBehaviorOptions = {}) {
	const [expanded, setExpanded] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	const navbarRef = useRef<HTMLDivElement>(null);

	// Закрытие по клику вне + Escape
	useEffect(() => {
		if (!expanded) return;

		const handleOutsideClick = (event: MouseEvent) => {
			const target = event.target;

			if (!(target instanceof Element)) return;

			if (
				navbarRef.current &&
				!navbarRef.current.contains(target) &&
				!target.closest('.navbar-toggler')
			) {
				setExpanded(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setExpanded(false);
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.removeEventListener('keydown', handleEscape);
		};
	}, [expanded]);

	// Тёмная тема
	useEffect(() => {
		const target = aboutRef?.current;
		if (!target) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsDark(true);
				}
			},
			{
				threshold: 0.01,
				rootMargin: '0px 0px -10% 0px',
			}
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, [aboutRef]);

	// Скрытие навбара
	useEffect(() => {
		const target = bottomRef?.current;
		if (!target) return;

		const observer = new IntersectionObserver(
			([entry]) => setIsHidden(entry.isIntersecting),
			{
				threshold: 0.1,
				rootMargin: '0px 0px -120px 0px',
				...hideOptions,
			}
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, [bottomRef, hideOptions]);

	const closeNavbar = useCallback(() => {
		setExpanded(false);
	}, []);

	return {
		expanded,
		setExpanded,
		isDark,
		isHidden,
		navbarRef,
		closeNavbar,
	};
}
