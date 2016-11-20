const xhrRequest = require('xhr');

function xhr(url, options = {}) {
    return promisify(url, options);
}

function promisify(url, options) {
    if (url) {
        options.url = url;
    }

    return new Promise((resolve, reject) => xhrRequest(
        options,
        (err, res, body) => err ? reject(err) : resolve(res)
    ));
}

const methods = ['get', 'put', 'post', 'patch', 'head', 'delete', 'del'];
let len = methods.length;

while (len--) {
    let method = methods[len];

    xhr[method === 'delete' ? 'del' : method] = (url, options = {}) => {
        options.method = method.toUpperCase();

        return promisify(url, options);
    };
}

module.exports = xhr;
