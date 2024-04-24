const express = require('express');
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const api = express();
api.listen(3001, () => {console.log('API Rodando na Porta 3001')});

api.get('/index', async(req, res)=>{
    try{
        const driver = await new Builder().forBrowser('chrome').build();

        const url = 'bianca.com';

        await driver.get(url);

        const html = await driver.getPageSource();

        await driver.quit();

        res.send(html);
    }catch (error){
        console.error('Erro:', error);
        res.status(500).json({error: 'Erro ao fazer scraping'});
    }
})

