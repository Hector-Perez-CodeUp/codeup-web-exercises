
function addCont(cityObjArr, contString) {
    cityObjArr.forEach(function(city) {
        city.continent = contString;
        console.log(city);
    })
}
let cities = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }]
addCont(cities, "Asia");


// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]