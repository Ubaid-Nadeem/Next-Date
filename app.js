var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
var newdate = new Date()
newdate = newdate.getTime(); 

var date = prompt('Next Day');

var nextday = date*(1000*60*60*24);

var d = new Date(nextday+newdate);


console.log( d.getDate());
console.log( months[d.getMonth()]);
console.log( DAYS[d.getDay()]);

document.write(`<h1>Date</h1> <p>${d.getDate()} </p> <h1>Day</h1> <p>${DAYS[ d.getDay()]} </p> <h1>Month</h1> <p>${months[ d.getMonth()]} </p>`);