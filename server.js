const Sequelize = require('sequelize');
const express = require('express');

const app = require('./app');
const config = require('./config/config.json');

app.listen(3000, () => {
  console.log('The server is waiting for connection...'); // eslint-disable-line no-console
});
