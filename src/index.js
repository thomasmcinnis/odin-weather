import './style.css';

import { renderCurrent, renderForecast } from './components/render-page';
import getData from './data/get-data';
import renderBackground from './components/render-background';
import renderError from './components/render-error';

let prefersC = true;
let location = '';
let currentData = {};
let forecastData = {};

const input = document.querySelector('input');
const button = document.querySelector('header button');

function updateLocation(e) {
    const value = e.target.value;

    if (!value) return;

    getData(value)
        .then((response) => {
            location = response.location.name;
            currentData = response.current;
            forecastData = response.forecast;

            renderCurrent(location, currentData, prefersC);
            renderForecast(forecastData, prefersC);
            input.value = '';
            input.blur();
        })
        .catch((error) => {
            renderError(value);
            console.error(error);
        });
}

function toggleUnit() {
    prefersC = !prefersC;
    button.textContent = !prefersC ? 'ºF' : 'ºC';
    renderCurrent(location, currentData, prefersC);
    renderForecast(forecastData, prefersC);
    renderBackground(prefersC);
}

// Set up first page render on load
function init() {
    getData('Sydney') // TODO: input based on user location/IP
        .then((response) => {
            location = response.location.name;
            currentData = response.current;
            forecastData = response.forecast;

            renderCurrent(location, currentData, prefersC);
            renderForecast(forecastData, prefersC);

            // Make page interactive
            input.addEventListener('change', updateLocation);
            button.addEventListener('click', toggleUnit);
        })
        .catch((error) => {
            // render the error message UI
            //
            console.error(error);
        });
}

init();
