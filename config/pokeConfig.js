const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

module.exports = { app, port };