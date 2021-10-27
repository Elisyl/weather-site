const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=51b453204ea245264a8fef4b43f14362&query=' + latitude + ',' + longitude +'&units=f'

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error){
            callback('Unable to find', undefined)
        }else{
            callback(undefined ={}, body.current.weather_descriptions[0] + `. it is currently ` + body.current.temperature + '  degrees out' +  ' It feels like ' + body.current.feelslike + ` degrees out`)
        }
    })
}

module.exports = forecast