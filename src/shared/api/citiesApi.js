export async function fetchCities(query) {
	const params = new URLSearchParams({ query });

	const response = await fetch(`/cities.php?${params.toString()}`);

	if (!response.ok) {
		throw new Error('Ошибка поиска городов');
	}

	const data = await response.json();

	return data.cities;
}
