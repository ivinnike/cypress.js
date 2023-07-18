# cypress.js
<div id="header" align="center">
  <img src="https://media.giphy.com/media/NTjkdAKV2v0MZDWuWD/giphy.gif" width="300"/>
  
</div>

Как запустить?
1. Установить node.js: https://nodejs.org/en/download/
2. Скачать проект из github и открыть в IDE (например, sublime или vs code).
3. В терминале зайти в папку с проектом и запустить
   </br>`npm install --save-dev cypress@12.7.0`
4. В папке с проектом в терминале запустить:
   </br>`npm i`
5. Так как я использовала локаторы xpath, то необходимо установить плагин
   </br> `npm install -D cypress-xpath`
6. Запускать Сайпресс можно командой
   </br>`npx cypress open`
7. Файл с автотестами распологается в директории `cypress/e2e/login.cy.js`
