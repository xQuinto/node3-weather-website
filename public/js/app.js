const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const day1Date = document.querySelector('#day1-date')
const day1Min = document.querySelector('#day1-min')
const day1Max = document.querySelector('#day1-max')
const day1Description = document.querySelector('#day1-description')
//const day1Image = document.querySelector('#day1-image')

const day2Date = document.querySelector('#day2-date')
const day2Min = document.querySelector('#day2-min')
const day2Max = document.querySelector('#day2-max')
const day2Description = document.querySelector('#day2-description')

const day3Date = document.querySelector('#day3-date')
const day3Min = document.querySelector('#day3-min')
const day3Max = document.querySelector('#day3-max')
const day3Description = document.querySelector('#day3-description')

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
            }
        })    
})
})