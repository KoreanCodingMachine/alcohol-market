import Router from 'koa-router';
import signIn from './signin.js';
import signUp from './signup.mjs'

import {beerMainScroll, getAllBeer, getBeerInfo, getBeerTop5} from './beer.js'
import {postBeerReview, getBeerReview} from './review.js'

const router = new Router();

router.post('/api/signin', signIn);
router.post('/api/signup', signUp);

router.get('/api/beer/main', beerMainScroll);
router.get('/api/beer/info/:beerId', getBeerInfo);
router.get('/api/beer/all', getAllBeer);
router.get('/api/beer/top', getBeerTop5);
router.post('/api/beer/review', postBeerReview);
router.get('/api/beer/review/:beerId', getBeerReview)

export default router;