const API_KEY = 'edbfa5eb42054f5a96484313241402';

export default async function getData(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=edbfa5eb42054f5a96484313241402&q=${location}&days=3&aqi=no&alerts=no`
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
