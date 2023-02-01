import express from 'express';
const app = express();
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const PORT = process.env.PORT || 3000;
const puppeteer = require('puppeteer-extra');
const hidden = require('puppeteer-extra-plugin-stealth')

// require executablePath from puppeteer
const {executablePath} = require('puppeteer')

test()

async function test() {

  // Launch sequence
  puppeteer.use(hidden())
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--enable-automation'],
    args: ['--no-sandbox', "--disable-blink-features=AutomationControlled", "--proxy-server=190.61.88.147:8080"],
    headless: true,
    ignoreHTTPSErrors: true,

    executablePath: executablePath(),
  })
  const page = await browser.newPage()
//   await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0")
//   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36')

  await page.setViewport({
    width: 1920,
    height: 1280,
    deviceScaleFactor: 1,
  });

  // Go to page
//   await page.goto('https://bot.sannysoft.com/', {
//     waitUntil: 'networkidle0',
//   });

//   await page.goto('https://nowsecure.nl', {
//     waitUntil: 'networkidle0',
//   });

  // await page.goto('https://amiunique.org/fp', {
  //   waitUntil: 'networkidle0',
  // });

  // await page.goto("https://www.glami.es/salida/urban-threads-tall/7361908?o=64&btid=184&t=detail", {
  //   waitUntil: 'networkidle0',
  // });
  
  await page.goto("https://whatismyipaddress.com/", {
    waitUntil: 'domcontentloaded',
  });
  let ip = await page.$eval('#ipv4', el => el.innerText)
  let perrito = page.url()
  console.log(perrito, ip)
}

app.listen(PORT, () => {

    console.log("Server running on port 3000");

})