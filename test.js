var test = require('tape');
var rk = require('./');

test('default separator', function (t) {
	t.equal('a:b:c:d', rk('a','b','c','d'));
	t.end();
});

test('custom separator', function (t) {
	var r = rk.defaults('/');

	t.equal('a/b/c/d', r('a','b','c','d'));
	t.end();
});

test('custom separator and prefix', function (t) {
	var r = rk.defaults('/', 'v1');

	t.equal('v1/a/b/c/d', r('a','b','c','d'));
	t.end();

});
