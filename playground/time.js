var moment = require('moment');

// Jan 1st 1970 00:00:10 am

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(1, 'months');
// console.log(date.format('MMM Do, YYYY'));


// 12:50 PM

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createAt = 1234;
var date = moment(createAt);
console.log(date.format('h:mm A'));
