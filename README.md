Promise XHR (xdr)
======
This is a Promise XHR wrapper. Uses [https://www.npmjs.com/package/xhr](https://www.npmjs.com/package/xhr) under the hood.

NOTE
--
For older browsers you need a promise polyfill. [https://www.npmjs.com/package/promise-polyfill](https://www.npmjs.com/package/promise-polyfill)

Installation
--
```bash
$ npm i --save promise-xhr
```

Usage
--
```js
const xhr = require('promise-xhr');
const api = 'https://api.github.com';

// Options available:
// https://www.npmjs.com/package/xhr#var-req--xhroptions-callback
const options = {};

// Basic get request
xhr(api)
    .then((res, body) => console.log(res, body))
    .catch(err => console.error(err));

// With options
xhr(api, {
    method: 'POST',
    useXDR: true
})
    .then((res, body) => console.log(res, body))
    .catch(err => console.error(err));

// Available methods: get, post, put, patch, del, head
xhr.get(api).then(console.log).catch(console.error);
xhr.post(api, options).then(console.log).catch(console.error);

```

XHR package docs
--
[https://www.npmjs.com/package/xhr](https://www.npmjs.com/package/xhr)

Contribution
--
Contributions are appreciated.

License
--
MIT-licensed. See LICENSE.
