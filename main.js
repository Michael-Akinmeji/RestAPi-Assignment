console.log('help');

//const apiURL = `https://api.weatherapi.com/v1/current.json?q="Manchester"&key=121e8294280f4eeba27220327253005`

// async function getCurrentWeather(params) {
//    const apiRes = await fetch(apiURL)

//    const result = await apiRes.json();

//  const temperature = result.current.temp_c;

//    const name = result.location.name;

//    const country = result.location.country; 

//    const icon = result.current.condition.icon;
//    const text = result.current.condition.text;

//    const placeHolder = document.querySelector("#weather-info")
//    placeHolder.innerHTML = `

//        <p> Right now it is ... </p>
//        <p>${name}, ${country}  </p>
//        <p>${temperature} C</p>

//        <p> <img src="${icon}" alt="${text}"/> ${text}</p>
//        `


//console.log ('Name: ', name);
//console.log ('Country: ', country);
//console.log ('temperature: ', temperature);
//console.log("api response: ", JSON.stringify(result));
// }
// getCurrentWeather();


async function getAstronomy() {
    const city = document.getElementById('city-input').value.trim();

    if (!city) return;

    const apiURL = `https://api.weatherapi.com/v1//astronomy.json?q=${city}&dt=today&key=121e8294280f4eeba27220327253005`

    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
      // If the response isn't OK (e.g. city not found), show an error
      document.getElementById('result').innerText = `City "${city}" not found. Please check the spelling.`;
      return;
        }

        const data = await response.json();

        const sunrise = data.astronomy.astro.sunrise;
        const sunset = data.astronomy.astro.sunset;

        document.getElementById('result').innerHTML = `
        <div id='resultContent'>
            <h1>${city}</h1>
            <div id="riseset">
                <div id="sunrise"> 
                    <h3> Sunrise </h3> <h2>${sunrise}</h2> 
                </div>

                <div id="sunset"> 
                    <h3>Sunset</h3> <h2>${sunset}</h2> 
                </div>
            </div>
        </div>
        `;
    } catch (error) {
        document.getElementById('result').innerText = 'Oops! Could not get astronomy info.';
    }
}