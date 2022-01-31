const Todo = require('../models/Todo');

module.exports = function (fastify, opts, done) {
  fastify.route({
    method: 'GET',
    url: '/todo/all',
    handler: async (request, reply) => {
      return Todo.find(request.query);
    }
  });

  fastify.route({
    method: 'POST',
    url: '/todo/create',
    handler: async (request, reply) => {
      reply.header("Access-Control-Allow-Origin", "*");
      reply.header("Access-Control-Allow-Methods", "POST");

      return Todo.create({
        name: request.body.name,
        description: request.body.description,
        isDone: false,
      });
    }
  });

  fastify.route({
    method: 'PUT',
    url: '/todo/update/:id',
    handler: async (request, reply) => {
      return Todo.findOneAndUpdate({ _id: request.params.id }, {
        name: request.body.name,
        description: request.body.description,
        isDone: request.body.isDone,
      }, {new: true});
    }
  });

  fastify.route({
    method: 'DELETE',
    url: '/todo/delete/:id',
    handler: async (request, reply) => {
      await Todo.deleteOne({_id: ctx.params.id});
      return [];
    }
  })

  done()
}
