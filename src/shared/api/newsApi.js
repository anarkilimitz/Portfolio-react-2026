// Суть этой настройки - локально всё продолжает работать без PHP,
// 	а на сервере — через PHP - прокси.
// при npm start будет работать запрос напрямую
// при npm run build будет собираться сборка с php прокси

const isDev = process.env.NODE_ENV === 'development';

const DEV_URL = `https://newsapi.org/v2/top-headlines?category=technology&pageSize=6&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
const PROD_URL = '/news.php';

export async function fetchTechNews() {
	const url = isDev ? DEV_URL : PROD_URL;

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
