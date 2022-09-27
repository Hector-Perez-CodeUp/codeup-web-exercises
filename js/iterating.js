(function(){
    "use strict";

    let names = ['Jim', 'Pam', 'Dwight', 'Michael'];

    console.log(names.length);

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    names.forEach(function(name) {
        console.log(name);
    })


    function firstSecondLast(){
        console.log(names[0]);
        console.log(names[1]);
        console.log(names[(names.length - 1)]);
    }
    firstSecondLast();
})();