const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const mongoose = require('mongoose');
const config = require('config');
const todoRouter = require('./routes/todo-router');

const PORT = config.get('serverPort');
const DB_URL = config.get('dbUrl');

const app = new Koa();

app.use(bodyParser())
  .use(cors());

mongoose.connect(DB_URL);

app.use(json())
  .use(todoRouter.routes());

app.listen(PORT);

