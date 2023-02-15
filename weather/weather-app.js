import { WeatherAPI } from "./weather-api.js";

class WeatherApp{
    init(){
        this.addEventHandlers();
    }

    addEventHandlers(){
        const searchBox = document.querySelector(".search-box");
        searchBox.param1 = this;
        searchBox.addEventListener("keypress", this.handleEvent);
    }

    handleEvent(event)
    {
        if(event.key=="Enter" || event.keyCode == 13){
            const eventTarget = event.target;
            const cityName = eventTarget.value;
            const theWeatherAppObject = eventTarget.param1;
            const weatherAPI = new WeatherAPI(cityName);
            weatherAPI.invoke().then((response) => {
                theWeatherAppObject.updateUIElements(response);
            })
        }
    }

    updateUIElements(weatherJSON){

        const weatherElement = document.querySelector(".current .weather");
        const value = weatherJSON.weather[0].main;
        weatherElement.innerHTML = value;

        const temperatureElement = document.querySelector(".current .temp");
        temperatureElement.innerHTML = `${weatherJSON.main.temp} °c`;

        const hiLowElement = document.querySelector(".current .hi-low");
        hiLowElement.innerHTML =`${weatherJSON.main.temp_max}°c / ${weatherJSON.main.temp_min}°c`; 

        const cityElement = document.querySelector(".location .city")
        cityElement.innerHTML = `${weatherJSON.name}, ${weatherJSON.sys.country}`;
    
        const dateElement = document.querySelector(".location .date")
        const now = new Date();
        const dateAsString = now.toLocaleDateString("en-US", {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
    
        console.log("Date as String " + dateAsString);
        dateElement.innerHTML = `${dateAsString}`;
    }
}

export {WeatherApp};