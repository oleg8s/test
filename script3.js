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
    const loginButton = await page.$('[name="Войти"]');
    await loginButton.click();
	
	console.log('Шаг 5: Закрыть окно');
	const closeModalButton = await page.waitForSelector('._modal-close-button');
	await closeModalButton.click();
	
	console.log('Шаг 6: Перейти в раздел техподдержки');
    const support = await page.$('.main-navigation-list-item');
    await support.click();

	console.log('Шаг 7: Ввод обращения');
    const textInput = await page.waitForSelector('#input-209');
	console.log(textInput);
    await textInput.type('Тест');

	console.log('Шаг 8: Нажать на кнопку');
    const saveButton = await page.$('[name="Сохранить"]');
    await saveButton.click();
	
	console.log('Ожидание элемента с результатом');
    await page.waitForSelector('._modal-caption');

    console.log('Получение строки с результатом');
    const text = await page.$eval('._modal-caption', element => element.textContent);
    
	console.log('Сделать скриншот экрана');
    await page.screenshot({path: 'testE2eResult.png'});

  
}

testE2eResult();