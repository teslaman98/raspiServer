const fetch = require('node-fetch');

let url = 'http://xkcd.com/info.0.json';

let settings = { method: 'Get' };

(async () => {
    const response = await fetch(url);
    global.xkcd = await response.json();
    return xkcd
})();


module.exports = global.xkcd