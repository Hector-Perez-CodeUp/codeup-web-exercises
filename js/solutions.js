"use strict";


// 1.
function isTrue(input) {
    return (input === true);
}


// 2.
function isFalse(input) {
    return (input === false);
}


// 3.
function not(input) {
    return (!(input));
}


// 4.
function addOne(input) {
    return (Number(input) + 1);
}


// 5.
function isEven(input) {
    if (parseInt(input) % 2  == 0) {
        return true;
    } else {
        return false;
    }
}


// 6.
function isIdentical(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}


// 7.
function isEqual(x, y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}


// 8.
function or(x, y) {
    return (x || y);
}


//9.
function and(x, y) {
    return (x && y);
}


// 10.
function concat(x, y) {
    return x.toString() + y.toString();
}
/**

 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
