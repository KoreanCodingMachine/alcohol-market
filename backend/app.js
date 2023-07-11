import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import router from './router/index.js';

import { connectDB } from './db.js';

const app = new Koa();


(async () => {
    try {
      await connectDB();
      
      app.use(cors());
      app.use(bodyParser());
      app.use(router.routes());
      app.use(router.allowedMethods());
      app.listen(3000);
    } catch (error) {
      console.error('Failed to start the application:', error);
    }
  })();