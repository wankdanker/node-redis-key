"use strict";

module.exports = defaults(':');
module.exports.defaults = defaults;

function defaults (separator) {
	return function redisKey() {
		return Array.prototype.slice.call(arguments).join(separator) 
	}
}
