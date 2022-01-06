// Let's create variables for the api link and define xmlhttp
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var input = document.getElementById("city").value;
var units = "&units=metric&mode=XML";
var apiKey = "&APPID=819fef191214242d61228e9bf235e276";
let xmlhttp = new XMLHttpRequest();

// Function that creates and sends AJAX request
function weatherAsk() {
    
    var input = document.getElementById("city").value;

    xmlhttp.open("GET",
        api + input + units + apiKey, true);

    xmlhttp.send();

}

// Function that displays the response how i want it
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let weatherObject = JSON.parse(xmlhttp.response);

        document.getElementById("place").innerHTML ="Real time weather in: " + weatherObject.name;
        document.getElementById("sky").innerHTML = "Weather condition: " + weatherObject.weather[0].description;
        document.getElementById("temp").innerHTML = "Temperature: " + weatherObject.main.temp + " °C";;
        document.getElementById("tempfeel").innerHTML = "Feels like: " + weatherObject.main.feels_like + " °C";
        document.getElementById("wind").innerHTML = "Wind speed: " + weatherObject.wind.speed + " m/s";
        



    }
}

