const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo-router');

require('dotenv').config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = new Koa();

app.use(bodyParser())
  .use(cors());

mongoose.connect(DB_URL);

app.use(json())
  .use(todoRouter.routes());

app.listen(PORT);

