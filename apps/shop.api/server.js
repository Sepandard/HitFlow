//import modules

const initModules = require('./initModule');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const path = require('path');
const colors = require('colors');
dotenv.config({ path: './config/config.env' });
require('./config/db');
const fs = require('fs');
const Logger = require('./utils/logger');

// init application
const app = express();

// fix access to back-end
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_APP_HOST);

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//body Parser
app.use(express.json());

// init file upload
app.use(fileUpload());

// implement req logger for development mood
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

console.log(__dirname);
// set static folder
app.use(express.static(path.join(__dirname, '/public')));

initModules(app); 

//check log file
if (fs.existsSync('./log/database-log.txt')) { 
  console.log(`Logger File is already exist...`.yellow.bold);
} else {
  fs.writeFile('./log/database-log.txt', 'Logger File Started...', (err) => {
    if (err) {
      console.log(`${err}`.red.bold);
    }
    console.log(`Creating Logger File`.bgBlue);
  });
}

const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger_output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// start server Configuration
const PORT = process.env.PORT || 5020;
const server = app.listen(
  PORT,
  console.log(
    `we are in ${process.env.NODE_ENV} mood and port is ${process.env.PORT}`
      .yellow.bold
  )
);

//unhandle process probelm
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error : ${err.message}`.red);
  server.close(() => process.exit(1));
});

app.use('*', (req, res, next) => {
  res.status(500).json('Database is offline');
});
