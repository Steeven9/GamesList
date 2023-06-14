import { MongoClient } from "mongodb";
import { env } from "./env";

const uri = env.MONGODB_URI;
const options = {};

const client = new MongoClient(uri, options);
const db = client.db("gameslist");

export default db;
