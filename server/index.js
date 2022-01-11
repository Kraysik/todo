const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const mongoose = require('mongoose');
const config = require('config');
const Todo = require('./models/Todo');

const PORT = config.get('serverPort');
const DB_URL = config.get('dbUrl');

const app = new Koa();
const router = new Router();

app.use(bodyParser())
  .use(cors());

mongoose.connect(DB_URL);

router.get('/todos', async (ctx) => {
  const todos = await Todo.find({ isDone: false });

  ctx.body = todos;
});

router.post('/todo/create', async (ctx) => {
  const requestBody = ctx.request.body;
  const todo = await Todo.create({
    name: requestBody.name,
    description: requestBody.description,
    isDone: false,
  });

  ctx.body = todo;
});

router.put('/todo/update/:id', async (ctx) => {
  const requestBody = ctx.request.body;

  const todo = await Todo.findOneAndUpdate({ _id: ctx.params.id }, {
    name: requestBody.name,
    description: requestBody.description,
    isDone: requestBody.isDone,
  });

  ctx.body = todo;
});


app.use(json())
  .use(router.routes());
app.listen(PORT);

