const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b47bed7cdmsh3c00a14b95cd37ep12678ajsne9d1a6882e1f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
		.then(response => response.json())
		.then((response) => {
			
			console.log(response)

			let unix_timestamp = response.sunrise;
			var date = new Date(unix_timestamp * 1000);
			var hours = date.getHours();
			var minutes = "0" + date.getMinutes();
			var seconds = "0" + date.getSeconds();
			var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

			let unix_timestamp1 = response.sunset;
			var date1 = new Date(unix_timestamp1 * 1000);
			var hours1 = date1.getHours();
			var minutes1 = "0" + date1.getMinutes();
			var seconds1 = "0" + date1.getSeconds();
			var formattedTime1 = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			sunrise.innerHTML = formattedTime
			sunset.innerHTML = formattedTime1
			
			})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Kolkata")
