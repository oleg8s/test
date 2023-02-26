const puppeteer = require('puppeteer');

const URL_TEST = 'https://demo.zveno.io/';

async function testE2eResult() {
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({headless: false, slowMo: 100});

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Шаг 1: Открыть сайт  по ссылке:');
    await page.goto(URL_TEST);

    console.log('Шаг 2: Ввод логина');
    const mailInput = await page.$('#input-21');
    await mailInput.type('support@gmail.com');
	
    console.log('Шаг 3: Ввод пароля');
    const passwordInput = await page.$('#input-25');
    await passwordInput.type('bB!123456');

    console.log('Шаг 4: Нажать на кнопку');
    const pressButton = await page.$('[name="Войти"]');
    await pressButton.click();

    await page.screenshot({path: 'testTaxiResult.png'});


}

testE2eResult();