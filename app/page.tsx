import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello there! Click <Link href="/games">here</Link> to see the list of
      games
    </div>
  );
}
