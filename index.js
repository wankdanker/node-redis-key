"use strict";

module.exports = defaults(':');
module.exports.defaults = defaults;

function defaults (separator, prefix) {
	if (prefix) {
		return function redisKey() {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(prefix);
			return args.join(separator);
		}
	}

	return function redisKey() {
		return Array.prototype.slice.call(arguments).join(separator) 
	}
}
