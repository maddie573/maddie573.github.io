var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var serviceInfo = request.response;
  showsService(serviceInfo);
}

function showService(jsonObj) {
  var services = jsonObj['services'];

for( var i = 0; i <services.length; i++){
  if (services[i].name == "Basic Tune-up" || town[i].name == "" || town[i].name == "Greenville" ){
  var myArticle = document.createElement('th');
  var myH3 = document.createElement('td');
  var myH4 = document.createElement('td');
  var myPara2 = document.createElement('td');
  var myPara3 = document.createElement('td');
  var myPara4 = document.createElement('td');
  var myList = document.createElement('td');

  myH3.textContent = town[i].name;
  myH4.textContent = town[i].motto;
  myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
  myPara3.textContent = 'Current Population: ' + town[i].currentPopulation;
  myPara4.textContent = 'Average Rainfall: ' + town[i].averageRainfall;
  myList.textContent = 'Events: ';

  var eventList = town[i].events;

  for (var j = 0; j < eventList.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = eventList[j];
    myList.appendChild(listItem);
  }
  myArticle.appendChild(myH3);
  myArticle.appendChild(myH4);
  myArticle.appendChild(myPara2);
  myArticle.appendChild(myPara3);
  myArticle.appendChild(myPara4);
  myArticle.appendChild(myList);

  section.appendChild(myArticle);
}}
}
