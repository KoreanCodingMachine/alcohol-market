import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  }, { collection : 'users' });

const User = mongoose.model('users', userSchema);

export default User