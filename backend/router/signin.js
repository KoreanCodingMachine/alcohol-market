import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

const privateKey = 'SOOL_DAM_HWA';

export default async function (ctx, next) {
  const { username, password } = ctx.request.body;

  try {
    const user = await User.findOne({ username:  username});

    console.log("user", user, username, password)
    if (!user) {
      ctx.status = 400;
      ctx.body = { message: 'Invalid username or password' };
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      ctx.status = 400;
      ctx.body = { message: 'Invalid username or password' };
      return;
    }

    const token = jwt.sign({ username: user.username }, privateKey, {
      expiresIn: '1h',
    });

    ctx.status = 200;
    ctx.body = { message: 'Logged in successfully', token };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { message: 'Unexpected error occurred.' };
  }
}
