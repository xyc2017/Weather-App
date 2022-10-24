// constants and variables 
const apiKey = 'e7235b52e03da2db89b3168c2763c76b'
const baseURL = "https://api.openweathermap.org/data/2.5/weather?"
const kelvin=273
console.log(apiKey, baseURL)
// cached element reference
// functions
// q={city name},{state code},{country code}&appid={API key}
function citySearch(city){
    $.ajax(`${baseURL}q=${city}&appid=${apiKey}`)
    .then(function(data){
        console.log(data)
        console.log(city)
        // render the data
        const $main = $("main")
        $main.empty()
        $main.html(`
        <h2>${data.name}</h2>
        <div>Now: ${Math.floor(((data.main.temp)-273)*9/5+32) + "°F"}</div>
        <div>Minimum temperature: ${Math.floor(((data.main.temp_min)-273)*9/5+32)+"°F"}</div>
        <div>Maximum temprature: ${Math.floor(((data.main.temp_max)-273)*9/5+32)+"°F"}</div>
        <div>Feels like: ${Math.floor(((data.main.feels_like)-273)*9/5+32)+"°F"}
        <div>Weather: ${data.weather[0].main}</div>
        `)      
    })      
}
$("input[type=submit]").on("click", (event)=>{
    event.preventDefault()
    const inputText= $("input[type=text]").val()
    citySearch(inputText)
})


