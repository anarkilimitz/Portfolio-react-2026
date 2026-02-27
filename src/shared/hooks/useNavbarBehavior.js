// хук для изменения цвета навбара и скрытия

import { useState, useEffect, useRef, useCallback } from 'react';

export function useNavbarBehavior({
	aboutRef = null,
	bottomRef = null,
	themeOptions = {},
	hideOptions = {},
} = {}) {
	const [expanded, setExpanded] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	const navbarRef = useRef(null);

	// Закрытие по клику вне + Escape
	useEffect(() => {
		if (!expanded) return;

		const handleOutside = (e) => {
			if (e.key === 'Escape') {
				setExpanded(false);
				return;
			}

			if (
				navbarRef.current &&
				!navbarRef.current.contains(e.target) &&
				!e.target.closest?.('.navbar-toggler')
			) {
				setExpanded(false);
			}
		};

		document.addEventListener('mousedown', handleOutside);
		document.addEventListener('keydown', handleOutside);

		return () => {
			document.removeEventListener('mousedown', handleOutside);
			document.removeEventListener('keydown', handleOutside);
		};
	}, [expanded]);

	// темная тема
	useEffect(() => {
		const target = aboutRef?.current;
		if (!target) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsDark(true); // всегда включена после хедера (темный фон)
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

		const defaultOpts = {
			threshold: 0.1,
			rootMargin: '0px 0px -120px 0px', // чуть раньше, чтобы не висел над футером
		};

		const observer = new IntersectionObserver(
			([entry]) => setIsHidden(entry.isIntersecting),
			{ ...defaultOpts, ...hideOptions }
		);

		observer.observe(target);
		return () => observer.disconnect();
	}, [bottomRef, hideOptions]);

	const closeNavbar = useCallback(() => setExpanded(false), []);

	return {
		expanded,
		setExpanded,
		isDark,
		isHidden,
		navbarRef,
		closeNavbar,
	};
}
