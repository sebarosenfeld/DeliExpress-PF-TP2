import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const puerto = process.env.PORT;

const deliApp = express();

deliApp.get('/', (req, res) => {
    res.send('!Delivery!');
});

deliApp.listen(puerto);
