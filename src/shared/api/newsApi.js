const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export async function fetchTechNews() {
	// pageSize=6 загружать только 6 новостей
	const url = `https://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&pageSize=6&page=1&apiKey=${API_KEY}`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error('Не получилось загрузить новости');
	}

	const data = await res.json();
	return data.articles;
}
