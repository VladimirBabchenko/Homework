require("./assets/css/styles.css");

var Clock = require("./assets/js/clock");
var pattern = require("./assets/js/pattern");

var compileClock = new Clock(pattern);
console.log(compileClock.start());

