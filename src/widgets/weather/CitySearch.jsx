import { useEffect, useState } from 'react';
import { fetchCities } from '../../shared/api/citiesApi';

import styles from './citySearch.module.scss';

function CitySearch({ onSelectCity }) {
	const [query, setQuery] = useState('');
	const [cities, setCities] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searched, setSearched] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const searchQuery = query.trim();

		setCities([]);
		setSearched(false);
		setError('');

		if (searchQuery.length < 2) {
			setLoading(false);
			return;
		}

		let isActive = true;

		const timer = setTimeout(async () => {
			setLoading(true);

			try {
				const results = await fetchCities(searchQuery);

				if (!isActive) return;

				setCities(results);
				setSearched(true);
			} catch (e) {
				if (!isActive) return;

				setError('The search could not be performed. Please try again.');
				console.error(e);
			} finally {
				if (isActive) {
					setLoading(false);
				}
			}
		}, 500);

		return () => {
			isActive = false;
			clearTimeout(timer);
		};
	}, [query]);

	const handleSelectCity = (city) => {
		onSelectCity(city);
		setQuery('');
		setCities([]);
		setSearched(false);
	};

	return (
		<div className={styles.citySearch}>
			<input
				className={styles.input}
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Find a city..."
				aria-label="Search for cities"
				autoComplete="off"
			/>

			{loading && <div className={styles.message}>Looking for a city...</div>}

			{error && <div className={styles.message}>{error}</div>}

			{!loading && !error && searched && cities.length === 0 && (
				<div className={styles.message}>
					<strong>City not found</strong>
					<span>This city is not in the Weather DB.</span>
				</div>
			)}

			{cities.length > 0 && (
				<ul className={styles.results}>
					{cities.map((city, index) => (
						<li key={`${city.lat}-${city.lon}-${index}`}>
							<button
								className={styles.cityButton}
								type="button"
								onClick={() => handleSelectCity(city)}
							>
								<span>{city.name}</span>

								<small>
									{[city.state, city.country].filter(Boolean).join(', ')}
								</small>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default CitySearch;
