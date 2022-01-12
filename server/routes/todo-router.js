const Router = require('koa-router');
const Todo = require('../models/Todo');

const router = new Router();

router.get('/todos', async (ctx) => {
  const isDoneQuery = ctx.request.query.isDone ?? false;
  const todos = await Todo.find({ isDone: isDoneQuery });

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

module.exports = router;
