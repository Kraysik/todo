const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);

fastify.register(require('./routes/todo'));

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();
