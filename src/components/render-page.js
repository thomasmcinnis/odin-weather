export function renderCurrent(location, currentData, prefersC) {
    const temp = prefersC ? currentData.temp_c : currentData.temp_f;
    const roundedTemp = Math.round(temp);
    const imgSrc = `https:${currentData.condition.icon}`;

    const img = document.querySelector('.current-icon');
    img.src = imgSrc;

    const cityName = document.querySelector('#city-name');
    cityName.textContent = location;

    const currentTemp = document.querySelector('#current-temp');
    currentTemp.textContent = `+ ${roundedTemp}º`;
}

export function renderForecast(forecastData, prefersC) {}
