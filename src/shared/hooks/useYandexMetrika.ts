import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useYandexMetrika = (counterId: number) => {
	const location = useLocation();

	useEffect(() => {
		if (typeof window.ym !== 'undefined') {
			window.ym(counterId, 'hit', location.pathname + location.search);
		}
	}, [location, counterId]); // Срабатывает каждый раз, когда меняется URL
};
