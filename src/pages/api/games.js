import clientPromise from "lib/mongodb";

let handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("gameslist");

    const posts = await db.collection("games").find({}).toArray();

    res.json(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default handler;
