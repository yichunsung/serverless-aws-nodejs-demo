// app.js
const express = require('express');
const app = express();
const serverless = require('serverless-http');

//Handle the GET endpoint on the root route /
app.get('/', async (req, res, next) => { 
  res.status(200).json({
    status: 200,
    message: 'successful',
    data: 'Hello World main route'
  });
});

app.get('/hello', async (req, res, next) => { 
  res.status(200).json({
    status: 200,
    message: 'successful',
    data: [
      {
        id: 1,
        name: 'John',
        age: 35,
        isActive: true
      },
      {
        id: 2,
        name: 'Momo',
        age: 15,
        isActive: false
      },
      {
        id: 3,
        name: 'Kyle',
        age: 65,
        isActive: true
      }
    ]
  });
});

app.post('/hello', async (req, res, next) => { 
  res.status(200).json({
    status: 200,
    message: 'successful',
    data: [
      {
        id: 1,
        key: 'bgokhopythtjuiej',
      },
      {
        id: 2,
        key: 'sadasddghtyjjujy'
      },
      {
        id: 3,
        key: 'ijhyithtnnvinedfug'
      }
    ]
  });
});

module.exports.server = serverless(app);
