var moment = require('moment');
// var date = new Date();

// console.log(date.getMonth());

var date = moment();
// date.add(100, 'years').subtract(10, 'months');
console.log(date.format('MMM Do, YYYY')); 

// 10:35 am
// 6:01 am
console.log(date.format('h:mm a')); 

// var dateJS = new Date();
// dateNow = dateJS.getTime();
// console.log(dateNow);

var timeNow = moment().valueOf();
console.log(timeNow);
