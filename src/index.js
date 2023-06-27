const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');

// const {sendBasicEmail} = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');

const jobs = require('./utils/job');


const setupAndStartServer = ()=>{
    const app  = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);
        jobs();
        // await sendBasicEmail(
        //     'airlinemanagement56@gmail.com',
        //     'pg0623733@gmail.com',
        //     'Third email',
        //     'Our company is ready and we are still checking that everything is fine'
        // )

        
    })
}

setupAndStartServer();
