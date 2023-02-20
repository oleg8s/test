const puppeteer = require('puppeteer');

const URL_TEST = 'https://demo.zveno.io/';

async function testTaxiResult() {
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
    await passwordInput.type('Tu4321@');

    console.log('Шаг 4: Нажать на кнопку');
    const routeMode = await page.$('[name="Войти"]');
    await routeMode.click();

    await page.screenshot({path: 'testTaxiResult.png'});


}

testTaxiResult();