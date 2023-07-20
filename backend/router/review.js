import Review from '../models/review.js';

export async function postBeerReview (ctx, next) {
    const { content, rating, beerId, user } = ctx.request.body;

    const newReview = new Review({
        content,
        rating: rating*1,
        beerId: beerId*1,
        user
      });

      try {
        await newReview.save();
        ctx.status = 201;
        ctx.body = { message: 'Review saved successfully' };
      } catch (err) {
        ctx.status = 500;
        console.log(err)
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