//weather Quaery API
function weatherQuery(latitude, longitude) {
    // open weather api key

    var weatherAPIkey = 'e0517042c4c62f6d8cc8a258ba9ed1b4';

    // open weather base url

    var weatherBaseURL = "https://api.openweathermap.org/data/2.5/weather?"

    let weatherLatitudeParam = latitude;

    let weatherLongtudeParam = longitude;

    // setting up the query url
    var weatherQueryURL = weatherBaseURL + "lat=" + weatherLatitudeParam  + "&lon=" + weatherLongtudeParam + "&appid=" + weatherAPIkey;
    console.log(weatherQueryURL);

    //the Ajax call
    $.ajax({
           URL: weatherQueryURL,
           method: "GET"
         })
         .then(function(response){
            console.log(weatherQueryURL);
         })
  }

