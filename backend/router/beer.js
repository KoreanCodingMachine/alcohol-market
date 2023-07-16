import BeerModel from '../models/beer.js';


export async function getBeerTop5(ctx) {
  try {
    const beers = await BeerModel.find().sort({ rating: -1 }).limit(5);

    console.log("beers", await BeerModel.find())
    ctx.body = beers;
  } catch (error) {
    console.error('Error retrieving items:', error);
    ctx.status = 500;
    ctx.body = 'An error occurred while retrieving items.';
  }
}

export async function getBeerInfo(ctx) {
  const { beerId } = ctx.params;
  try {
    const beer = await BeerModel.findOne({ beerId: beerId * 1 });
    ctx.body = beer;
  } catch (error) {
    console.error('Error retrieving items:', error);
    ctx.status = 500;
    ctx.body = 'An error occurred while retrieving items.';
  }
}

export async function getAllBeer(ctx) {
  try {
    const beers = await BeerModel.find();
    ctx.body = beers;
  } catch (error) {
    console.error('Error retrieving items:', error);
    ctx.status = 500;
    ctx.body = 'An error occurred while retrieving items.';
  }
}

export async function beerMainScroll(ctx) {
  const { page } = ctx.query;
  const pageSize = 40;

  try {
    const totalCount = await BeerModel.countDocuments();
    const totalPages = Math.ceil(totalCount / pageSize);
    const skip = (page - 1) * pageSize;
    const items = await BeerModel.find().skip(skip).limit(pageSize);
    const hasMore = page < totalPages;
    const response = {
      items,
      hasMore,
    };

    ctx.body = response;
  } catch (error) {
    console.error('Error retrieving items:', error);
    ctx.status = 500;
    ctx.body = 'An error occurred while retrieving items.';
  }
}
