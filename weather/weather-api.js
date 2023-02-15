const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "bf0856db4fdff491b0a06027e0844460";

class WeatherAPI{
    constructor(cityName){
        this.cityName = cityName;
        this.apiUrl = new URL(API_BASE_URL);
    }

    buildURL()
    {
        this.apiUrl.searchParams.append("q",this.cityName);
        this.apiUrl.searchParams.append("appid",API_KEY);
        this.apiUrl.searchParams.append("units","metric");
        console.log(this.apiUrl.toString());
    }

    invoke(){
        this.buildURL();

       return fetch(this.apiUrl.toString())
        .then((response) => {return response.json()})
        .then((responseAsJSON => {
            console.log(responseAsJSON);
            return responseAsJSON;
        }))
        .catch((error) => {
            console.log(error);
            return;
        })
    }
}
export {WeatherAPI};