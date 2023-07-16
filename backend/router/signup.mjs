import bcrypt from 'bcrypt';
import User from '../models/user.js';

export default async function (ctx, next) {
  const { username, password } = ctx.request.body;

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      ctx.status = 400;
      ctx.body = { message: 'User already exists' };
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();

    ctx.status = 201;
    ctx.body = { message: 'User created successfully', username };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Unexpected error occurred.' };
  }
}
