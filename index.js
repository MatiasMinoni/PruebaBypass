import {createRequire} from "module";
const require = createRequire(import.meta.url);

const puppeteer = require('puppeteer-extra');
const hidden = require('puppeteer-extra-plugin-stealth')

// require executablePath from puppeteer
const {executablePath} = require('puppeteer')

test()

async function test() {

  // Launch sequence
  puppeteer.use(hidden())
  const browser = await puppeteer.launch({
    args: ['--no-sandbox',],
    headless: true,
    ignoreHTTPSErrors: true,

    // add this
    executablePath: executablePath(),
  })

  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1280,
    deviceScaleFactor: 1,
  });

  // Go to page
  await page.goto('https://www.glami.es/salida/2xu/8124848?o=64&btid=180&t=detail&f=102.301.405.411&til=180', {
    waitUntil: 'networkidle0',
    
  });
  let perrito = page.url()
  console.log(perrito)
}