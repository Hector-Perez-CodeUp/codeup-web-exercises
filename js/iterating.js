(function(){
    "use strict";
    // Array of Names
    let names = ['Jim', 'Pam', 'Dwight', 'Michael'];


    // Number of Names
    console.log(names.length);


    // Print each name through index
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    // For Loop Name Logs
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }


    // forEach Loop
    names.forEach(function(name) {
        console.log(name);
    })

    // Functions that return first, second, and last elements of array
    function first(names) {
        console.log(names[0]);
    }

    function second(names) {
        console.log(names[1]);
    }

    function last(names) {
        console.log(names[names.length - 1]);
    }

    first(names);
    second(names);
    last(names);
})();
