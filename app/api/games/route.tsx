import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("gameslist");

  const posts = await db.collection("games").find({}).toArray();

  return NextResponse.json(posts);
}
