import Review from '../models/review.js';

export async function postBeerReview (ctx, next) {
<<<<<<< HEAD
    const { content, rating, beerId } = ctx.request.body;
=======
    const { content, rating, beerId, user } = ctx.request.body;
>>>>>>> 9943ea214fa4e9a51c8929a9390605ea1c6123d5

    const newReview = new Review({
        content,
        rating: rating*1,
<<<<<<< HEAD
        beerId: beerId*1
=======
        beerId: beerId*1,
        user
>>>>>>> 9943ea214fa4e9a51c8929a9390605ea1c6123d5
      });

      try {
        await newReview.save();
        ctx.status = 201;
        ctx.body = { message: 'Review saved successfully' };
      } catch (err) {
        ctx.status = 500;
<<<<<<< HEAD
=======
        console.log(err)
>>>>>>> 9943ea214fa4e9a51c8929a9390605ea1c6123d5
        ctx.body = { error: 'Failed to save the review' };
      }
}

export async function getBeerReview(ctx, next) {
    const {beerId} = ctx.params

    try {
        const data = await Review.find({ beerId: beerId*1 })
        ctx.body = data
    } catch (e) {
        ctx.status = 500;
        ctx.body = { e }
    }
}