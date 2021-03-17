var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("working");

  puppeteer.launch().then(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/accounts/login/");

    await page.waitFor(2000);

    await page.type("[name=username]", "sedatsozen24");
    await page.type("[name=password]", "s10048ss10048s");
    await page.click("[type=submit]");

    await page.waitFor(3000);

    await page.click("#react-root > section > main > div > div > div > div > button");

    await page.waitFor(2000);

    await page.screenshot({path: "1.png"});

    await page.goto("https://www.instagram.com/" + "sedatsozen24");

    await page.waitFor(2000);
    
    await page.waitForSelector("img ", {
        visible: true
    });

    const data = await page.evaluate(() => {
        const images = document.querySelectorAll("img");
        const urls = Array.from(images).map(v => v.src);
        return urls;
    });

    await browser.close();
    console.log(data);

    data.shift();
    data.pop();

    res.send(data);
});
});

module.exports = router;
