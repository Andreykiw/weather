export const getCurrentTime = () => {
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'июн', 'авг', 'сен', 'окт', 'ноя', 'дек']

    const weekdays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']

    const date = new Date()

    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const dayOfWeek = weekdays[date.getDay()]
    const dayOfMonth = date.getDate()
    
    let hours = date.getHours()
    let minutes = date.getMinutes() 

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    console.log('minutes:', minutes)

    return {dayOfWeek,dayOfMonth, month, year, hours, minutes }


};

export const getWindDirection = (deg) => {
    const directions = [
        '&#8593;',
        '&#8598;',
        '&#8592;',
        '&#8601;',
        '&#8595;',
        '&#8600;',
        '&#8594;',
        '&#8599;',
    ]
    
    const i = Math.round(deg / 45) % 8

    return directions[i]

} 

export const convertPressure = (pressure) => {
    const mmHg = pressure * 0.750063755
    
    return mmHg.toFixed(2)
}