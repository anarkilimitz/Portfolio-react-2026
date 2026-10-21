import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';

export function useWeather() {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getWeatherData = async (lat, lon, city) => {
			try {
				const data = await fetchWeather(lat, lon, city);
				setWeather(data);
			} catch (e) {
				console.error(e);
			} finally {
				setLoading(false);
			}
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					// Пользователь разрешил доступ
					getWeatherData(position.coords.latitude, position.coords.longitude);
				},
				() => {
					// Пользователь запретил доступ — ставим дефолтный город
					getWeatherData(null, null, 'Ekaterinburg');
				}
			);
		} else {
			// Браузер не поддерживает геолокацию — ставим дефолт
			getWeatherData(null, null, 'Ekaterinburg');
		}
	}, []);

	const selectCity = async (city) => {
		setLoading(true);

		try {
			const data = await fetchWeather(city.lat, city.lon);
			setWeather(data);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	return { weather, loading, selectCity };
}
