export async function fetchWeather(lat, lon, city = null) {
	const params = new URLSearchParams({
		units: 'metric',
		lang: 'ru',
	});

	if (city) {
		params.set('city', city);
	} else {
		params.set('lat', String(lat));
		params.set('lon', String(lon));
	}

	const res = await fetch(`/weather.php?${params.toString()}`);
	if (!res.ok) throw new Error('Ошибка загрузки погоды');

	return await res.json();
}
