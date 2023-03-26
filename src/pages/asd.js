import styles from "@/styles/Home.module.css";
import { Button } from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Asd() {
  return (
    <>
      <Head>
        <title>Asd - GamesList</title>
        <meta name="description" content="TODO" />
      </Head>
      <main className={styles.main}>
        <Button>asddsa</Button>
      </main>
    </>
  );
}
