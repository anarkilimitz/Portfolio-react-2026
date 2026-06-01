export async function fetchTechNews(page = 1) {
	const res = await fetch(`/news.php?page=${page}`);

	if (!res.ok) {
		throw new Error('Не получилось загрузить новости');
	}

	const data = await res.json();

	if (data.status !== 'ok') {
		throw new Error(data.message || 'Ошибка NewsAPI');
	}

	return data.articles || [];
}
