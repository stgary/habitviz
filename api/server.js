const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const scheduleRouter = require('../schedule/schedule-router.js');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(
  cors({
      origin: "*",
      credentials: false, 
  })
);

app.use('/schedule', scheduleRouter);

app.get('/', (req, res) => {
  res.send({ confirmed: 'api working as intended' })
});

module.exports = app;