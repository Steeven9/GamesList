import { Roboto } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import joystick from "../public/joystick.png";
import "./globals.css";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "GamesList",
  description: "A list of games, duh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body className={font.className}>
        <Link href="/" className="flex items-center m-4">
          <Image src={joystick} alt="A joystick" width={60} />
          <h1 className="ml-3">GamesList</h1>
        </Link>

        <main className="flex flex-col items-center justify-between p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
