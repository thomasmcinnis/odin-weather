function formatTemp(num, gap) {
    const roundedNum = Math.round(num);
    if (roundedNum >= 0) {
        return `+${gap}${roundedNum}`;
    }
    return `-${gap}${-roundedNum}`;
}

export function renderCurrent(location, currentData, prefersC) {
    const temp = prefersC ? currentData.temp_c : currentData.temp_f;
    const dispTemp = formatTemp(temp, ' ');
    const imgSrc = `https:${currentData.condition.icon}`;

    const img = document.querySelector('.current-icon');
    img.src = imgSrc;

    const cityName = document.querySelector('#city-name');
    cityName.textContent = location;

    const currentTemp = document.querySelector('#current-temp');
    currentTemp.textContent = `${dispTemp}º`;
}

export function renderForecast(forecastData, prefersC) {
    const forecastEl = document.querySelector('.forecast');

    while (forecastEl.firstChild) {
        forecastEl.removeChild(forecastEl.firstChild);
    }

    forecastData.forecastday.forEach((entry) => {
        // Extract the data for display
        const imgSrc = `https:${entry.day.condition.icon}`;

        const date = new Date(entry.date);
        const month = new Intl.DateTimeFormat([], { month: 'short' }).format(
            date
        );
        const day = new Intl.DateTimeFormat([], { day: 'numeric' }).format(
            date
        );
        const dispDate = `${month}. ${day}`;

        const max = prefersC ? entry.day.maxtemp_c : entry.day.maxtemp_f;
        const min = prefersC ? entry.day.mintemp_c : entry.day.mintemp_f;
        const dispTemp = `${formatTemp(max, '')}/${formatTemp(min, '')}`;

        // Push to the DOM
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src = imgSrc;
        div.appendChild(img);

        const dateEl = document.createElement('p');
        dateEl.textContent = dispDate;
        dateEl.className = 'date';
        div.appendChild(dateEl);

        const tempEl = document.createElement('p');
        tempEl.textContent = dispTemp;
        div.appendChild(tempEl);

        forecastEl.appendChild(div);
    });
}
