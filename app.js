const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

module.exports = app;
