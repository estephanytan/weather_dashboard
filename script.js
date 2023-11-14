var city = "";

var searchCity = $("#search-city");
var submitButton = $("#submit-buton");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");

var APIKey="0461480e04db00fd296025dd3d1cfeaa";

function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
};

