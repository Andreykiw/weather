const API_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = '1c4b7bc2c7850c659f05f928a9f510b6'

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`)
        if (!response.ok) {
            throw new Error("Ошибка запроса")
        }
        const data = await response.json()
        return { success: true, data}
    } catch (err){
        return { success: false, data}


    }
    

    
    
}
