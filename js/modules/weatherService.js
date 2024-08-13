import { fetchWeather } from "./APIService.js"
import { renderWeatherOther, renderWeatherToday, showError } from "./render.js"

export const startWeather = async () => {
    const weather = document.createElement('div')
    weather.classList.add('weather')

    const dataWeather = await fetchWeather('Саранск')
    
    if (dataWeather.success) {
        renderWeatherToday(weather, dataWeather)
        renderWeatherOther(weather, dataWeather)
    } else {
        showError()
    }


    // renderWeatherForecast(weather)
    return weather
}