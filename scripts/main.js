// -----------------------------------------------------------------------------
// When the document loads
// -----------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello World")

    // Start by fading out the loadingText
    $(".loadingText").fadeOut(1500, function() {
        // After fadeOut is complete, fadeIn the loadedText
        $(".loadedText").fadeIn(100);
    });

    const apiKey = "d0c7d13021d04b771ba4609b39aecd97";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox = document.querySelector(".searchBar input");
    const searchBtn = document.querySelector(".searchBar button");
    const weatherIcon = document.querySelector(".weather-icon");


    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "assets/WeatherAplication/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "assets/WeatherAplication/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "assets/WeatherAplication/drizzle.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "assets/WeatherAplication/rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "assets/WeatherAplication/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "assets/WeatherAplication/snow.png";
        };
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
        
    }
    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

    checkWeather();
});                        

