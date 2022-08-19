const todos = require('./routes/routes');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const { default: mongoose } = require('mongoose');

mongoose.connect(process.env.DB_CONNECT)
  .then(res => console.log('Database connect'))
  .catch(err => console.log(err))

app.use(express.json());
app.use(cors());
app.use('/', todos)

const port = process.env.PORT || 8080;

const server = http.createServer((req , res) => {
  res.writeHead(200 , {
    'Content-type':'text/html'
  })
})

app.listen(port , () => console.log(`Server started on port ${port}`))