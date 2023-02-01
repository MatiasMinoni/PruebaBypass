import { create } from 'phantom';
 
(async function() {
  const instance = await create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });
 
  const status = await page.open('https://www.glami.es/salida/2xu/8124848?o=64&btid=180&t=detail&f=102.301.405.411&til=180');
  const content = await page.property('url');
  console.log(content);
 
  await instance.exit();
})();