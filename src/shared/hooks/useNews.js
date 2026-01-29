import { useEffect, useState } from 'react';
import { fetchTechNews } from '../api/newsApi';

export function useNews() {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchTechNews()
			.then(setNews)
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false));
	}, []);

	// проверка на error
	// useEffect(() => {
	// 	Promise.reject(new Error('Test error'))
	// 		.catch((e) => setError(e.message))
	// 		.finally(() => setLoading(false));
	// }, []);

	return { news, loading, error };
}
