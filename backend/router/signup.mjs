import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { getDBInstance } from '../db.js';

const privateKey = 'SOOL_DAM_HWA'

export default async function (ctx, next) {
  const db = getDBInstance();
    const { username, password } = ctx.request.body;
    const usersCollection = db.collection('users');
    
    const userExists = await usersCollection.findOne({ username });
  
    if (userExists) {
      ctx.status = 400;
      ctx.body = { message: 'User already exists' };
      return;
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    
    await usersCollection.insertOne(newUser);
  
    ctx.status = 201;
    ctx.body = { message: 'User created successfully', username };
}