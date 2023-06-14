import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://mongodb";
const options = {};

const client = new MongoClient(uri, options);
const db = client.db("gameslist");

export default db;
