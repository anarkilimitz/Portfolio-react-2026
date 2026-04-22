// src/shared/api/weatherApi.js
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(lat, lon, city = null) {
	// Если есть координаты, приоритет им, если нет — ищем по городу
	const query = city ? `q=${city}` : `lat=${lat}&lon=${lon}`;
	const url = `${BASE_URL}?${query}&units=metric&appid=${API_KEY}&lang=ru`;

	const res = await fetch(url);
	if (!res.ok) throw new Error('Ошибка загрузки погоды');

	return await res.json();
}
