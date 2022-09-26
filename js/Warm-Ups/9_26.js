




function even(arr) {
    let evenArr = [];
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 == 0) {
            evenArr.push(i);
            i++;
        }
    }
    console.log(evenArr);
}

numbers = [1, 2, 3, 4, 5]
//even(numbers);


function addContinent(cityObjArr, contStr) {
    cityObjArr.forEach(function(cityObj) {
        cityObj.continent = contStr;
        console.log(cityObj);
})
}

let cities = [
    {
        city: "Tokyo",
        country: "Japan"
    },
    {
        city: "Bangkok",
        country: "Thailand"
    }
]
addContinent(cities, "Asia");
