const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=34911b3b1f335cf458517358657aaf10&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather services", undefined)
        } else if (body.error) {
            callback("Unable to find location, please try again.", undefined)
        } else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const weatherDescription = body.current.weather_descriptions[0]
            const humidity = body.current.humidity
            const uv_index = body.current.uv_index
            callback(undefined, weatherDescription + ". It is currently " + temperature + " degrees Celcius outside, but it feels like " + feelslike + " degrees.\nThe humidity is " + humidity + "%.\nThe uv index is: " + uv_index + ".")
        }
    })
}

module.exports = forecast

