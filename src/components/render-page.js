export function renderCurrent(location, currentData, prefersC) {
    console.log(location, currentData, prefersC);

    const temp = prefersC ? currentData.temp_c : currentData.temp_f;
}

export function renderForecast(forecastData, prefersC) {
    console.log(forecastData, prefersC);
}
