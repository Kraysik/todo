const Router = require('koa-router');
const Todo = require('../models/Todo');

const router = new Router();

router.get('/todos', async (ctx) => {
  const isDoneQuery = ctx.request.query.isDone ?? false;
  ctx.body = await Todo.find({ isDone: isDoneQuery });
});

router.post('/todo/create', async (ctx) => {
  const requestBody = ctx.request.body;
  ctx.body = await Todo.create({
    name: requestBody.name,
    description: requestBody.description,
    isDone: false,
  });
});

router.put('/todo/update/:id', async (ctx) => {
  const requestBody = ctx.request.body;

  ctx.body = await Todo.findOneAndUpdate({ _id: ctx.params.id }, {
    name: requestBody.name,
    description: requestBody.description,
    isDone: requestBody.isDone,
  }, {new: true});

});

router.delete('/todo/delete/:id', async (ctx) => {
  try {
    await Todo.deleteOne({_id: ctx.params.id});
    ctx.body = [];
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
