import { startWeather } from "./modules/weatherService.js";
const initWeather = async (app) => {
    const weather = await startWeather();
    app.append(weather)


}
initWeather(document.querySelector('#app'))


