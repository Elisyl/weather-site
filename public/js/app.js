// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) => {
//         console.log(data);
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const msgone = document.querySelector('#message-1')
const msgtwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    const location = search.value

    msgone.textContent='Loading...'
    msgtwo.textContent=''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
           msgone.textContent = data.error
        } else {
            msgone.textContent = data.location
            msgtwo.textContent = data.forecast
        }
    
    })
})

    

    //console.log(location);
    
})








// 5FY6PW9 100
//  5FY95GK 

// 105723/10/2021 17:30Brighton - Manchester CityPrematch2
// 106523/10/2021 12:30Chelsea - NorwichPrematch1
// 110223/10/2021 15:00Everton - WatfordPrematch1
// 195223/10/2021 15:00Leeds Utd - WolvesPrematchOver(2.5)
// 221523/10/2021 15:00Southampton - BurnleyPrematchGG
// 221723/10/2021 15:00Crystal Palace - Newcastle UtdPrematch1
// 103823/10/2021 15:00Birmingham City - SwanseaPrematchGG
// 110123/10/2021 12:30Cardiff City - MiddlesbroughPrematchGG
// 114323/10/2021 15:00Peterborough - QPRPrematchOver(2.5)
// 115323/10/2021 15:00West Brom - Bristol CityPrematchOver(2.5)
// Stake: ₦ 100.00