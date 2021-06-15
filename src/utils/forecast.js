const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + latitude + ',' + longitude + '&units=m'
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=534f23b68fb8dc08545c7c524833ac7a'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather services", undefined)
        } else if (body.error) {
            callback("Unable to find location, please try again.", undefined)
        } else {
            const temperature = body.current.temp
            const feelslike = body.current.feels_like

            // vandaag + 7e daagse forecast
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

            const day4_date_unix = body.daily[3].dt * 1000
            const day4_date = new Date(day4_date_unix)
            const string_day4_date = day4_date.getDate() + "/" + (day4_date.getMonth()+1)

            const day5_date_unix = body.daily[4].dt * 1000
            const day5_date = new Date(day5_date_unix)
            const string_day5_date = day5_date.getDate() + "/" + (day5_date.getMonth()+1)

            const day6_date_unix = body.daily[5].dt * 1000
            const day6_date = new Date(day6_date_unix)
            const string_day6_date = day6_date.getDate() + "/" + (day6_date.getMonth()+1)

            const day7_date_unix = body.daily[6].dt * 1000
            const day7_date = new Date(day7_date_unix)
            const string_day7_date = day7_date.getDate() + "/" + (day7_date.getMonth()+1)

            const day8_date_unix = body.daily[7].dt * 1000
            const day8_date = new Date(day8_date_unix)
            const string_day8_date = day8_date.getDate() + "/" + (day8_date.getMonth()+1)

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

            const day4_min = body.daily[3].temp.min
            const day4_max = body.daily[3].temp.max
            const day4_description = body.daily[3].weather[0].description
            const day4_image = body.daily[3].weather[0].icon

            const day5_min = body.daily[4].temp.min
            const day5_max = body.daily[4].temp.max
            const day5_description = body.daily[4].weather[0].description
            const day5_image = body.daily[4].weather[0].icon

            const day6_min = body.daily[5].temp.min
            const day6_max = body.daily[5].temp.max
            const day6_description = body.daily[5].weather[0].description
            const day6_image = body.daily[5].weather[0].icon

            const day7_min = body.daily[6].temp.min
            const day7_max = body.daily[6].temp.max
            const day7_description = body.daily[6].weather[0].description
            const day7_image = body.daily[6].weather[0].icon

            const day8_min = body.daily[7].temp.min
            const day8_max = body.daily[7].temp.max
            const day8_description = body.daily[7].weather[0].description
            const day8_image = body.daily[7].weather[0].icon
            
            
            // De variabelen sturen naar /weather
            callback(undefined, {temperature, feelslike, 
                // De dagelijkse voorspelling voor 1 tabel
                string_today_date, today_min, today_max, today_description, today_image, 
                string_tomorrow_date, tomorrow_min, tomorrow_max, tomorrow_description, tomorrow_image, 
                string_day3_date, day3_min, day3_max, day3_description, day3_image,
                string_day4_date, day4_min, day4_max, day4_description, day4_image,
                string_day5_date, day5_min, day5_max, day5_description, day5_image,
                string_day6_date, day6_min, day6_max, day6_description, day6_image,
                string_day7_date, day7_min, day7_max, day7_description, day7_image,
                string_day8_date, day8_min, day8_max, day8_description, day8_image,
            })
        }
        
    })
}

module.exports = forecast

