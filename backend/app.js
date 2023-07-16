import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import router from './router/index.js';
import mongoose from 'mongoose'

const app = new Koa();

const connectionString = 'mongodb://127.0.0.1:27017/sdh';
const PORT = process.env.PORT || 3333;

(async () => {
    try {
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'MongoDB connection error:'));
      db.once('open', () => console.log('MongoDB Connected ..'));

      mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });


      app.use(cors());
      app.use(bodyParser());
      app.use(router.routes());
      app.use(router.allowedMethods());
      app.listen(PORT);
      console.log(`Listening on ${PORT}`)
    } catch (error) {
      console.error('Failed to start the application:', error);
    }
  })();