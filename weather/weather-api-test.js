import { WeatherAPI } from "./weather-api.js";

function testBuildURL()
{
    const weatherAPI = new WeatherAPI("Mumbai");
    weatherAPI.invoke();
}

testBuildURL();