const Url = []


 Url[0] = 'https://www.metaweather.com/api/location/44418/' //london
Url[1] = 'https://www.metaweather.com/api/location/638242' //berlin
Url[2] ='https://www.metaweather.com/api/location/615702' //paris
Url[3] = 'https://www.metaweather.com/api/location/766273' //madrid
const proxy = 'https://proxy-requests.herokuapp.com/'


for (let i=0; i<Url.length; i++) {
    fetch(proxy+Url[i])
    .then(function(odgovor) {
        return odgovor.json();
    })
    .then(function(podatak) {
        console.log(podatak.consolidated_weather);
        
        document.getElementById(`temp${i}`).innerText = Math.round(
        podatak.consolidated_weather[0].the_temp) +" ℃"
        document.getElementById(`slika${i}`).src = `https://www.metaweather.com/static/img/weather/${podatak.consolidated_weather[0].weather_state_abbr}.svg`
    })
    .catch(function(greska) {
        console.log(greska);
    })
}
// fetch(proxy+londonUrl)
//     .then(function(odgovor) {
//         return odgovor.json();
//     })
//     .then(function(podatak) {
//         console.log(podatak.consolidated_weather);
        
//         document.getElementById("temp1").innerText = Math.round(
//         podatak.consolidated_weather[0].the_temp) +" C"
//         document.getElementById("slika1").src = `https://www.metaweather.com/static/img/weather/${podatak.consolidated_weather[0].weather_state_abbr}.svg`
//     })
//     .catch(function(greska) {
//         console.log(greska);
//     })
