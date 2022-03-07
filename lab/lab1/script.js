let weather = {
    apiKey: "7e5ed29ceb351e7876c7fbfcae1004df",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=imperial&appid="
        + this.apiKey)
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            this.displayWeather(data);
        })
    },
    displayWeather: function(data) {
        const { name } = data.weather;
        const { icon, description } = data.weather[0]
        const { temp } = data.main
        console.log(name, icon, description, temp);
        
        document.querySelector(".icon").src = "";
        document.querySelector(".city").innerText = name + ", " + country;
        document.querySelector(".temp").innerText = temp + "F"
    }, 
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search-button")
.addEventListener("click", () => weather.search());

// document.querySelector(".search-button")
// .addEventListener("keyup", function(event) => {
//     if (event.key === "Enter") {
//         weather.search();
//     }
// });

weather.fetchWeather("berkeley");

