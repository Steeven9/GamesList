async function getData() {
  const res = await import("../api/games/route");
  return await (await res.GET()).json();
}

//TODO move this out
interface Game {
  name: string;
  genre: string;
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
