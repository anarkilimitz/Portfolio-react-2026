import React from 'react';
import { useWeather } from '../../shared/hooks/useWeather';
import WeatherIcon from 'react-weathericons';
import 'weather-icons/css/weather-icons.css';
import { FaRegSmileWink } from 'react-icons/fa';

import styles from './weatherWidget.module.scss';

function WeatherWidget() {
	const { weather, loading } = useWeather();

	if (loading)
		return (
			<div className={styles.loader}>
				<p>Погода не загрузилась</p>
				<p>
					Смотрим за окно <FaRegSmileWink />
				</p>
			</div>
		);
	if (!weather) return null;

	const weatherId = weather.weather[0].id;
	const iconCode = weather.weather[0].icon;
	const mainCondition = weather.weather[0].main.toLowerCase();

	const getIconName = (id, code) => {
		const isDay = code.includes('d');
		if (id >= 200 && id < 300) return 'thunderstorm';
		if (id >= 300 && id < 400) return 'showers';
		if (id >= 500 && id < 600) return 'rain';
		if (id >= 600 && id < 700) return 'snow';
		if (id >= 700 && id < 800) return 'fog';
		if (id === 800) return isDay ? 'day-sunny' : 'night-clear';
		if (id === 801) return isDay ? 'day-cloudy' : 'night-alt-cloudy';
		return 'cloudy';
	};

	return (
		<div className={`${styles.weatherWidget} ${styles[mainCondition]}`}>
			<div className={styles.mainInfo}>
				<div className={styles.tempBlock}>
					<span className={styles.temperature}>
						{Math.round(weather.main.temp)}°
					</span>
					<div className={styles.iconWrapper}>
						<WeatherIcon
							name={getIconName(weatherId, iconCode)}
							className={styles.animatedIcon}
						/>
					</div>
				</div>
				<div className={styles.details}>
					<h3 className={styles.city}>{weather.name}</h3>
					<p className={styles.description}>{weather.weather[0].description}</p>
				</div>
			</div>

			<div className={styles.stats}>
				<div className={styles.statItem}>
					<span className={styles.label}>Ощущается</span>
					<span className={styles.value}>
						{Math.round(weather.main.feels_like)}°
					</span>
				</div>
				<div className={styles.statItem}>
					<span className={styles.label}>Ветер</span>
					<span className={styles.value}>{weather.wind.speed} м/с</span>
				</div>
				<div className={styles.statItem}>
					<span className={styles.label}>Влажность</span>
					<span className={styles.value}>{weather.main.humidity}%</span>
				</div>
			</div>
		</div>
	);
}

export default WeatherWidget;
