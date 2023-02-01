const Browser = require('zombie');
const browser = new Browser();

browser.visit('https://www.glami.es/salida/2xu/8124848?o=64&btid=180&t=detail&f=102.301.405.411&til=180', function() {
    // logear la url actual
    console.log(browser.location.href);


    }
);

