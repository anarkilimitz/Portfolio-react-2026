// const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export async function fetchTechNews() {
	// pageSize=6 загружать только 6 новостей
	// const url = `https://newsapi.org/v2/top-headlines?category=technology&pageSize=6&apiKey=${API_KEY}`;

	const res = await fetch('/news.php');

	if (!res.ok) {
		throw new Error(`HTTP error: ${res.status}`);
	}

	const data = await res.json();
	return data.articles;
}
