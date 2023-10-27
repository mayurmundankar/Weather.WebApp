const apiKey = "cdfa44e682ec32baa74b359399bd6eb6";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            
            else{
                var data = await response.json();
                document.querySelector(".city").innerHTML = data.name;      //  '.name' is live/changing variable from API
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C"; // mathround for int value
                document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
            // it will select the city element & inner html will update the text written in element

            // to update image according to weather condition :
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "clouds.png"      // when weather condition is clouds, it will display cloud img.
            }
            else if(data.weather[0].main == "clear"){
                weatherIcon.src = "clear.png"      
            }
            else if(data.weather[0].main == "rain"){
                weatherIcon.src = "rain.png"      
            }
            else if(data.weather[0].main == "mist"){
                weatherIcon.src = "mist.png"      
            }

            document.querySelector(".weather").style.display = "block"; // will display content, once city is filled.
            document.querySelector(".error").style.display = "block";
            }

            
        }
        
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);  
        })
        checkWeather()