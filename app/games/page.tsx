import { Game } from "@/types/game";
import { GET } from "../api/games/route";

async function getData() {
  try {
    const res = await GET();
    return res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export default async function Games() {
  const data = await getData();

  let games = data.map((game: Game) => (
    <div key={game.name} className="mb-3">
      <p className="font-bold">{game.name}</p>
      Genre: {game.genre}
    </div>
  ));
  return <div>{games}</div>;
}
