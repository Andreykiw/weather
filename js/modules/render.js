import { convertPressure, getCurrentTime, getWindDirection } from "./utils.js";

export const renderWeatherToday = (weather, data) => {
    const { dayOfWeek,dayOfMonth, month, year, hours, minutes } = getCurrentTime ();
    

    weather.insertAdjacentHTML(
        'beforeend',
        `
        <div class="weather__today">
            <div class="weather__date-block">
                <p class="weather__date">${dayOfMonth} ${month} ${year}</p>
                <p class="weather__time">${hours}:${minutes}</p>
                <p class="weather__day">${dayOfWeek}</p>
            </div>
            <div class="weather__icon">
                <img class="weather__img" src="./icon/${data.data.weather[0].icon}.svg" alt="Погода">
            </div>
            <div class="weather__city">
            <div class="weather__name">
            <p>${data.data.name}</p>
            </div>
                <p class="weather__temp-big">${(data.data.main.temp - 273.15).toFixed(1)}°C</p>
                <p class="weather__felt">ощущается</p>
                <p class="weather__temp-small">${Math.floor(data.data.main.feels_like - 273.15)} °C</p>
        </div>


        `
    )

}

export const renderWeatherOther = (weather, data) => {

    weather.insertAdjacentHTML(

    'beforeend',
    `
    <div class="weather__other">
        <div class="weather__wind">
            <p class="weather__wind-title">Ветер</p>
            <p class="weather__wind-speed">${data.data.wind.speed} м/с</p>
            <p class="weather__wind-text">${getWindDirection(data.data.wind.deg)}</p>

        </div>
        <div class="weather__humidity">
            <p class="weather__humidity-title">Влажность</p>
            <p class="weather__humidity-value">${data.data.main.humidity}%</p>
        </div>
        <div class="weather__pressure">
            <p class="weather__pressure-title">Давление</p>
            <p class="weather__pressure-value">${convertPressure(data.data.main.pressure)}</p>
            <p class="weather__pressure-text">мм рт.ст.</p>
        </div>
        </div>
    `
    )

}



export const showError = (weather, error) => {
    weather.textContent = error
    weather.classList.add('weather__error') 
}