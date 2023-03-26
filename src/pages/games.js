import Head from "next/head";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Games() {
  const { data, error, isLoading } = useSWR("/api/games", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  let games = data.map((game) => (
    <div key={game._id}>
      {game.name} ({game.genre})
    </div>
  ));

  return (
    <>
      <Head>
        <title>Games - GamesList</title>
        <meta name="description" content="TODO" />
      </Head>

      <div>{games}</div>
    </>
  );
}
