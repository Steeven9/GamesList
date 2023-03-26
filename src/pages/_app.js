import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import joystick from "../../public/joystick.png";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={inter.className}>
          <div className="header">
            <Link href="/">
              <Image src={joystick} alt="A joystick" width={60} />
              <h1>GamesList</h1>
            </Link>
          </div>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
