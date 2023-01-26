const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');

const cron = require('node-cron');

const setupAndStartServer = () =>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(3004,() => {
        console.log(`Server started at port ${PORT}`);

        // sendBasicEmail(
        //     'airlinebooking338@gmail.com',
        //     'pg0623733@gmail.com',
        //     'This is a testing email 1',
        //     'Hey,how are you!!'

        // )

        cron.schedule('*/2 * * * *',()=>{
            console.log('Running a task every two minutes');
        })
    })
}

setupAndStartServer();