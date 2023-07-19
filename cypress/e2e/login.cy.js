
require('cypress-xpath');

describe('Авторизация', function () {
   it('Валидный логин и валидный пароль', function () {
        cy.visit('https://login.qa.studio')
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="mail"]').type('german@dolnikov.ru');
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="pass"]').type('iLoveqastudio1');
        cy.xpath('//*[@id="loginButton"]').should('be.enabled').click();
        cy.xpath('//*[@id="messageHeader"]').should('have.text','Авторизация прошла успешно');
        cy.xpath('//*[@id="exitMessageButton"]/img').should('exist');
    })

    it('Восстановление пароля', function () {
         cy.clearAllCookies()
         cy.visit('https://login.qa.studio')
         cy.xpath('//*[@id="forgotEmailButton"]').click();
         cy.xpath('//*[@id="exitRestoreButton"]').should('be.enabled');
         cy.xpath('//*[@id="forgotForm"]/h2').should('have.text','Восстановите пароль');
         cy.xpath('//*[@id="mailForgot"]').type('german@dolnikov.ru');
         cy.xpath('//*[@id="restoreEmailButton"]').should('be.enabled').click();
         cy.xpath('//*[@id="messageHeader"]').should('have.text','Успешно отправили пароль на e-mail');
         cy.xpath('//*[@id="exitMessageButton"]/img').should('exist');
     })

     it('Валидный логин и невалидный пароль', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio')
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="mail"]').type('german@dolnikov.ru');
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="pass"]').type('iLoveqastudio2');
        cy.xpath('//*[@id="loginButton"]').should('be.enabled').click();
        cy.xpath('//*[@id="messageHeader"]').should('have.text','Такого логина или пароля нет');
        cy.xpath('//*[@id="exitMessageButton"]/img').should('exist');
    })

    it('Невалидный логин и валидный пароль', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio')
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="mail"]').type('man@dolnikov.ru');
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="pass"]').type('iLoveqastudio1');
        cy.xpath('//*[@id="loginButton"]').should('be.enabled').click();
        cy.xpath('//*[@id="messageHeader"]').should('have.text','Такого логина или пароля нет');
        cy.xpath('//*[@id="exitMessageButton"]/img').should('exist');
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.clearAllCookies()
        cy.visit('https://login.qa.studio')
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="mail"]').type('GerMan@Dolnikov.ru');
        cy.xpath('//*[@id="loginButton"]').should('be.disabled');
        cy.xpath('//*[@id="pass"]').type('iLoveqastudio1');
        cy.xpath('//*[@id="loginButton"]').should('be.enabled').click();
        cy.xpath('//*[@id="messageHeader"]').should('have.text','Авторизация прошла успешно');
        cy.xpath('//*[@id="exitMessageButton"]/img').should('exist');
    })


    it('Автотест для сайта HuntingPony', function () {
        cy.visit('https://huntingpony.com/')
        cy.xpath('//div[@class="header__area-collections"]/ul/li[2]').click();
        cy.xpath('//a[@href="/product/domik-poni-apartamoni-2"]/picture[1]/img').click();
        cy.xpath('//*[@class="button button_size-xl button_wide add-cart-counter__btn"]').click();
        cy.wait(1000);
        cy.xpath('//*[@class="button button_size-xl  add-cart-counter__controls-btn"]').click();
        cy.wait(1000);
        cy.xpath('//div[@class="header__area-controls"]/a[3]').click();
        cy.xpath('//button[@class="button button_size-l button_wide"]').click();
        cy.wait(1000);
        cy.xpath('//h1[@class="decorated-title co-title co-title--h1"]').contains('Оформление заказа');
    })
 })
