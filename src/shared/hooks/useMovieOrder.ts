import { useCallback, useEffect, useState } from 'react';
import { moviesData } from '../../widgets/movies/moviesData';

const STORAGE_KEY = 'portfolio-movies-order';

function getInitialOrder(): string[] {
	return moviesData.map((movie) => movie.id);
}

function getSavedOrder(): string[] {
	try {
		const savedValue = localStorage.getItem(STORAGE_KEY);

		if (!savedValue) {
			return getInitialOrder();
		}

		const parsedValue: unknown = JSON.parse(savedValue);

		if (!Array.isArray(parsedValue)) {
			return getInitialOrder();
		}

		const availableIds = new Set(moviesData.map((movie) => movie.id));

		const validIds = parsedValue.filter(
			(id): id is string => typeof id === 'string' && availableIds.has(id)
		);

		const uniqueIds = [...new Set(validIds)];

		const newIds = moviesData
			.map((movie) => movie.id)
			.filter((id) => !uniqueIds.includes(id));

		return [...uniqueIds, ...newIds];
	} catch {
		return getInitialOrder();
	}
}

export function useMovieOrder() {
	const [movieOrder, setMovieOrder] = useState<string[]>(getInitialOrder);

	useEffect(() => {
		setMovieOrder(getSavedOrder());
	}, []);

	const saveOrder = useCallback((newOrder: string[]) => {
		setMovieOrder(newOrder);

		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(newOrder));
		} catch {
			// LocalStorage может быть недоступен или переполнен.
		}
	}, []);

	const resetOrder = useCallback(() => {
		const initialOrder = getInitialOrder();

		setMovieOrder(initialOrder);

		try {
			localStorage.removeItem(STORAGE_KEY);
		} catch {
			// Сброс порядка в интерфейсе работает даже без LocalStorage.
		}
	}, []);

	return {
		movieOrder,
		saveOrder,
		resetOrder,
	};
}
