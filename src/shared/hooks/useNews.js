import { useEffect, useState } from 'react';
import { fetchTechNews } from '../api/newsApi';

export function useNews() {
	const [news, setNews] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetchTechNews(page)
			.then((data) => {
				setNews((prev) => [...prev, ...data]); // догрузка новостей
			})
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false));
	}, [page]);

	return {
		news,
		loading,
		error,
		loadMore: () => setPage((prev) => prev + 1),
	};
}
