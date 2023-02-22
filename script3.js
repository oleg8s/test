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
	/*
    console.log('Шаг 5: Закрыть окно');
    const closeWindow = await page.$('');
    await closeWindow.click();
	*/
	/*
	console.log('Шаг 6: Переети враздел техподдержки');
    const support = await page.$('.main-navigation-list-item.v-list-item.v-list-item--link.theme--light');
    await support.click();
	*/
	/*
	console.log('Шаг 7: Ввод обращение');
    const textInput = await page.$('#input-209');
    await textInput.type('Тест');
	*/
	/*
	console.log('Шаг 8: Нажать на кнопку');
    const pressButton1 = await page.$('[name="Сохранить"]');
    await pressButton1.click();
	*/

    //await page.screenshot({path: 'testE2eResult.png'});

  
}

testE2eResult();