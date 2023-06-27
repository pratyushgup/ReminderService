const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = ()=>{
    const app  = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);

        // await sendBasicEmail(
        //     'airlinemanagement56@gmail.com',
        //     'pg0623733@gmail.com',
        //     'Third email',
        //     'Our company is ready and we are still checking that everything is fine'
        // )

        cron.schedule('* * * * *', () =>  {
            console.log('will execute every minute until stopped');
          });
    })
}

setupAndStartServer();
