import { MongoClient } from 'mongodb';

const databaseURL = 'mongodb://localhost:27017';
const dbName = 'sdh';

let dbInstance;

export async function connectDB() {
  if (dbInstance) {
    return dbInstance;
  }
  
  try {
    const client = await MongoClient.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    dbInstance = client.db(dbName);
    return dbInstance;
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    throw error;
  }
}

export function getDBInstance() {
  if (!dbInstance) {
    throw new Error('Database connection has not been established. Call connectDB() first.');
  }

  return dbInstance;
}
