import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - GamesList</title>
        <meta name="description" content="TODO" />
      </Head>
      <div>
        Hello there! Click <Link href="/games">here</Link> to see the list of
        games
      </div>
    </>
  );
}
