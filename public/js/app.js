const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const day1Date = document.querySelector('#day1-date')
const day1Min = document.querySelector('#day1-min')
const day1Max = document.querySelector('#day1-max')
const day1Description = document.querySelector('#day1-description')

const day2Date = document.querySelector('#day2-date')
const day2Min = document.querySelector('#day2-min')
const day2Max = document.querySelector('#day2-max')
const day2Description = document.querySelector('#day2-description')

const day3Date = document.querySelector('#day3-date')
const day3Min = document.querySelector('#day3-min')
const day3Max = document.querySelector('#day3-max')
const day3Description = document.querySelector('#day3-description')

const day4Date = document.querySelector('#day4-date')
const day4Min = document.querySelector('#day4-min')
const day4Max = document.querySelector('#day4-max')
const day4Description = document.querySelector('#day4-description')

const day5Date = document.querySelector('#day5-date')
const day5Min = document.querySelector('#day5-min')
const day5Max = document.querySelector('#day5-max')
const day5Description = document.querySelector('#day5-description')

const day6Date = document.querySelector('#day6-date')
const day6Min = document.querySelector('#day6-min')
const day6Max = document.querySelector('#day6-max')
const day6Description = document.querySelector('#day6-description')

const day7Date = document.querySelector('#day7-date')
const day7Min = document.querySelector('#day7-min')
const day7Max = document.querySelector('#day7-max')
const day7Description = document.querySelector('#day7-description')

const day8Date = document.querySelector('#day8-date')
const day8Min = document.querySelector('#day8-min')
const day8Max = document.querySelector('#day8-max')
const day8Description = document.querySelector('#day8-description')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = "It is currently " + data.forecast.temperature + " degrees, but it feels like " + data.forecast.feelslike + " degrees."
                messageTwo.textContent = data.location

                day1Date.textContent = data.forecast.string_today_date
                day1Min.textContent = data.forecast.today_min
                day1Max.textContent = data.forecast.today_max
                day1Description.textContent = data.forecast.today_description
                document.getElementById('day1-image').src = "https://openweathermap.org/img/wn/" + data.forecast.today_image + "@2x.png"
                //day1Image.innerHTML = "https://openweathermap.org/img/wn/01d@2x.png"

                day2Date.textContent = data.forecast.string_tomorrow_date
                day2Min.textContent = data.forecast.tomorrow_min
                day2Max.textContent = data.forecast.tomorrow_max
                day2Description.textContent = data.forecast.tomorrow_description
                document.getElementById('day2-image').src = "https://openweathermap.org/img/wn/" + data.forecast.tomorrow_image + "@2x.png"

                day3Date.textContent = data.forecast.string_day3_date
                day3Min.textContent = data.forecast.day3_min
                day3Max.textContent = data.forecast.day3_max
                day3Description.textContent = data.forecast.day3_description
                document.getElementById('day3-image').src = "https://openweathermap.org/img/wn/" + data.forecast.day3_image + "@2x.png"
           
                day4Date.textContent = data.forecast.string_day4_date
                day4Min.textContent = data.forecast.day4_min
                day4Max.textContent = data.forecast.day4_max
                day4Description.textContent = data.forecast.day4_description
                document.getElementById('day4-image').src = "https://openweathermap.org/img/wn/" + data.forecast.day4_image + "@2x.png"

                day5Date.textContent = data.forecast.string_day5_date
                day5Min.textContent = data.forecast.day5_min
                day5Max.textContent = data.forecast.day5_max
                day5Description.textContent = data.forecast.day5_description
                document.getElementById('day5-image').src = "https://openweathermap.org/img/wn/" + data.forecast.day5_image + "@2x.png"

                day6Date.textContent = data.forecast.string_day6_date
                day6Min.textContent = data.forecast.day6_min
                day6Max.textContent = data.forecast.day6_max
                day6Description.textContent = data.forecast.day6_description
                document.getElementById('day6-image').src = "https://openweathermap.org/img/wn/" + data.forecast.day6_image + "@2x.png"

                day7Date.textContent = data.forecast.string_day7_date
                day7Min.textContent = data.forecast.day7_min
                day7Max.textContent = data.forecast.day7_max
                day7Description.textContent = data.forecast.day7_description
                document.getElementById('day7-image').src = "https://openweathermap.org/img/wn/" + data.forecast.day7_image + "@2x.png"

                day8Date.textContent = data.forecast.string_day8_date
                day8Min.textContent = data.forecast.day8_min
                day8Max.textContent = data.forecast.day8_max
                day8Description.textContent = data.forecast.day8_description
                document.getElementById('day8-image').src = "https://openweathermap.org/img/wn/" + data.forecast.day8_image + "@2x.png"
            }
        })    
})
})