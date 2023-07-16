import mongoose from 'mongoose'

const beerSchema = new mongoose.Schema({
    title: String,
    image: String,
    rating: String,
    country: String,
    alcohol: Number,
    type: String,
    beerId: Number,
    alcoholNumber: Number
  }, { collection : 'beer' });

const Beer = mongoose.model('beer', beerSchema);

export default Beer