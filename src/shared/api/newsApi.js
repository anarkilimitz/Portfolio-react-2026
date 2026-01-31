// Суть этой настройки - локально всё продолжает работать без PHP,
// 	а на сервере — через PHP - прокси.
// при npm start будет работать запрос напрямую
// при npm run build будет собираться сборка с php прокси


// эта настройка для заливки на Хостинг
// const isDev = process.env.NODE_ENV === 'development';

// const DEV_URL = `https://newsapi.org/v2/top-headlines?category=technology&pageSize=6&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
// const PROD_URL = '/news.php';

// export async function fetchTechNews() {
// 	const url = isDev ? DEV_URL : PROD_URL;

// 	const res = await fetch(url);

// 	if (!res.ok) {
// 		throw new Error('Не получилось загрузить новости');
// 	}

// 	const data = await res.json();

// 	if (data.status !== 'ok') {
// 		throw new Error(data.message || 'Ошибка NewsAPI');
// 	}

// 	return data.articles || [];
// }



// эта настройка чтобы не тратить запросы с API чисто для разработки

// import { mockNews } from '../mocks/news.mock';

// const isDev = process.env.NODE_ENV === 'development';

// export async function fetchTechNews() {
// 	if (isDev) {
// 		console.log('🟡 MOCK NEWS USED');
// 		return new Promise((resolve) => {
// 			setTimeout(() => resolve(mockNews), 300);
// 		});
// 	}

// 	const res = await fetch('/api/news.php');

// 	if (!res.ok) {
// 		throw new Error('Failed to fetch news');
// 	}

// 	const data = await res.json();
// 	return data.articles;
// }

// ИСПОЛЬЗОВАТЬ ЭТУ НАСТРОЙКУ
const isDev = process.env.NODE_ENV === 'development';

export async function fetchTechNews(page = 1) {
	const url = isDev
		? `https://newsapi.org/v2/top-headlines?category=technology&pageSize=4&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
		: `/news.php?page=${page}`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error('Не получилось загрузить новости');
	}

	const data = await res.json();

	if (data.status !== 'ok') {
		throw new Error(data.message || 'Ошибка NewsAPI');
	}

	return data.articles || [];
}
