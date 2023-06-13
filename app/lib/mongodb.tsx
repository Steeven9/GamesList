import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};
let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise;
