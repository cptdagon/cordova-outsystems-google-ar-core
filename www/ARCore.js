var exec = require('cordova/exec');

function ARCore () {}

ARCore.prototype = {

    open: = function(success, fail) {
	exec(success, fail, 'OSARCore', 'open', []);
    },
};

module.exports = new Core;
