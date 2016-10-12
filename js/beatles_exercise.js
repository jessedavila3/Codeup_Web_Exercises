/**
 * Created by jessedavila on 10/12/16.
 */
"use strict";

var names = ['john', 'paul', 'ringo', 'george', 'yoko'];
var upperNames = [];

// mapping I guess
function toUpperCase(names) {
    names.forEach(function(element, index, array) {
        upperNames.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    return upperNames;
}

console.log(toUpperCase(names));



var numbers = [1,2,3,4,5,6,7,8,9,10];

function sumOfNumbers(numbers) {
    var sum = 1;
    numbers.forEach(function (element, array) {
        sum *= element;
        });
    return sum;
}

console.log("Sum of numbers is: " + sumOfNumbers(numbers));

var tableSum = "";
tableSum += "<ul>";
function toTable(names) {
    names.forEach(function (element, array) {
        tableSum += "<li>" + element + "</li>"
    });
    tableSum += "</ul>";
    return tableSum;
}

console.log(toTable(names));

//homework
//take an array of strings contaiing all the states
// return only states w/ the letter T.

//make another function that returns a new array of all the states >= two "s" characters

//make a function that squares each number on an array
//take an array of numbers and make a forEach that multiplies each number by itself
//function should return the arrayOfSquares

//write a function that takes an array of lowercase names
//uppercase the first letter of each name
// and returns only the names that start with Y

// write a function that takes an array of numbers 1-10
//returns the sum of only the numbers divisible by 3