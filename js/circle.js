(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * (Math.pow(this.radius, 2));
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding == true) {
            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea()));
                 return Math.round(circle.getArea());
             }
            console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
             return circle.getArea();
        }
    };
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();