import { getDBInstance } from '../db.js';

export default async function (ctx) {
  const db = getDBInstance();
  const collection = db.collection('beer');

  const { page } = ctx.query; 
  const pageSize = 40; 

  try {
    const totalCount = await collection.countDocuments();
    const totalPages = Math.ceil(totalCount / pageSize);
    const skip = (page - 1) * pageSize;
    const items = await collection.find().skip(skip).limit(pageSize).toArray();
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