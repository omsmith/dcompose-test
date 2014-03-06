'use strict';

var control1 = require('./control1/index.js'),
	control2 = require('./control2/index.js');

module.exports = testStuff;

function testStuff () {
	control1();
	control2();
}
