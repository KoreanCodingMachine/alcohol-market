import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Review from '../models/review.js';

export default async function (ctx, next) {
    const { content, rating } = ctx.request.body;

    console.log("ctx.request.body", content, rating, parseInt(rating))

    const newReview = new Review({
        content,
        rating
      });

      try {
        // Save the review to the database
        await newReview.save();
        ctx.status = 201;
        ctx.body = { message: 'Review saved successfully' };
      } catch (err) {
        ctx.status = 500;
        ctx.body = { error: 'Failed to save the review' };
      }
}