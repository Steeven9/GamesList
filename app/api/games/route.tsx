import { NextResponse } from "next/server";
import db from "../../lib/mongodb";

export async function GET() {
  const posts = await db.collection("games").find({}).toArray();

  return NextResponse.json(posts);
}
