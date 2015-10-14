redis-key
---------

Redis key generator / function argument joiner

This module is basically a shortcut for:

```js
Array.prototype.slice.call(arguments).join(separator);
```

install
-------

```bash
npm install redis-key
```

example
-------

```js
var rk = require('redis-key');

//default separator is ':'
var key = rk('product-collection', 'company', 'price-level');
//key = "product-collection:company:price-level"
```

### Setting a default separator

```js
var rk = require('redis-key').defaults('/');

//now the separator is '/'
var key = rk('part', 1, 3);
//key = "part/1/3"
```

motivation
----------

I've been generating redis keys like this:

```js
var key = ['part1', var1, var2, var3].join(':');
```

I thought it would be more consise to be able to do this:

```js
var key = k('part1', var1, var2, var3);
```

And if my math is correct, it is more concise by 9 whole characters. Joy.

license
-------

MIT
