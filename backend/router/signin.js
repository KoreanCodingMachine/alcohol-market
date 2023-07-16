import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { getDBInstance } from '../db.js';

const privateKey = 'SOOL_DAM_HWA'

export default async function (ctx, next) {
    const db = getDBInstance();
    const { username, password } = ctx.request.body;
    const usersCollection = db.collection('users');
  
    const user = await usersCollection.findOne({ username });
  
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
}