// Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. 
// For example: if the user enters the number 3, then it should return the month “March.”
//  Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
var output = "January";
var output = "February";
var output = "March";
var output = "April";
var output = "May";
var output = "June";
var output = "July";
var output = "August";
var output = "September";
var output = "October";
var output = "November";
var output = "December";
const number = prompt ("Enter a number...");
if (number == 1){
    output = "January";
} else if (number == 2){
        output = "February";
    } else if (number == 3){
        output = "March";
    } else if (number == 4){
        output = "April";
    } else if (number == 5){
        output = "May";
    } else if (number == 6){
        output = "June";
    } else if (number == 7){
        output = "July";
    } else if (number == 8){
        output = "August";
    } else if (number == 9){
        output = "September";
    } else if (number == 10){
        output = "October";
    } else if (number == 11){
        output = "November";
    } else if (number == 12){
        output = "December";
    } else {
        output = "You have entered an invalid number";
    }

    alert(output);