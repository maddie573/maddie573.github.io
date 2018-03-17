var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/1a0f871dbaa1c468/conditions/q/CA/San_Francisco.json', true);

weatherObject.send();

weatherObject.onload() = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
} //end of onload