import './style.css';

import { renderCurrent, renderForecast } from './components/render-page';
import getData from './data/get-data';

let prefersC = true;
let location = '';
let currentData = {};
let forecastData = {};

const input = document.querySelector('input');
const button = document.querySelector('button');

function updateLocation(e) {
    getData(e.target.value)
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
            // render the error message UI
            console.error(error);
        });
}

function toggleUnit() {
    prefersC = !prefersC;
    button.textContent = !prefersC ? 'ºF' : 'ºC';
    renderCurrent(location, currentData, prefersC);
    renderForecast(forecastData, prefersC);
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
