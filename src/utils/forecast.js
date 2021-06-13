const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=34911b3b1f335cf458517358657aaf10&query=' + latitude + ',' + longitude + '&units=m'
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=534f23b68fb8dc08545c7c524833ac7a'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather services", undefined)
        } else if (body.error) {
            callback("Unable to find location, please try again.", undefined)
        } else {
            const temperature = body.current.temp
            const feelslike = body.current.feels_like

            // De datums berekenen
            const today_date_unix = body.daily[0].dt * 1000
            const today_date = new Date(today_date_unix)
            const string_today_date = today_date.getDate() + "/" + (today_date.getMonth()+1)

            const tomorrow_date_unix = body.daily[1].dt * 1000
            const tomorrow_date = new Date(tomorrow_date_unix)
            const string_tomorrow_date = tomorrow_date.getDate() + "/" + (tomorrow_date.getMonth()+1)

            const day3_date_unix = body.daily[2].dt * 1000
            const day3_date = new Date(day3_date_unix)
            const string_day3_date = day3_date.getDate() + "/" + (day3_date.getMonth()+1)

            // De overige data uit api halen
            const today_min = body.daily[0].temp.min
            const today_max = body.daily[0].temp.max
            const today_description = body.daily[0].weather[0].description
            const today_image = body.daily[0].weather[0].icon

            const tomorrow_min = body.daily[1].temp.min
            const tomorrow_max = body.daily[1].temp.max
            const tomorrow_description = body.daily[1].weather[0].description
            const tomorrow_image = body.daily[1].weather[0].icon

            const day3_min = body.daily[2].temp.min
            const day3_max = body.daily[2].temp.max
            const day3_description = body.daily[2].weather[0].description
            const day3_image = body.daily[2].weather[0].icon
            
            
            // De variabelen sturen naar /weather
            callback(undefined, {temperature, feelslike, 
                string_today_date, today_min, today_max, today_description, today_image, 
                string_tomorrow_date, tomorrow_min, tomorrow_max, tomorrow_description, tomorrow_image, 
                string_day3_date, day3_min, day3_max, day3_description, day3_image})
        }
        
    })
}

module.exports = forecast

