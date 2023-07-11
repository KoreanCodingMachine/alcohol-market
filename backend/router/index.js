import Router from 'koa-router';
import signIn from './signin.js';
import signUp from './signup.mjs'
import beerMain from './beer.js'

// import productsRouter from './products';

const router = new Router();

router.post('/api/signin', signIn);
router.post('/api/signup', signUp);
router.get('/api/beer/main', beerMain);

export default router;