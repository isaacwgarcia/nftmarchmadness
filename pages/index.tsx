import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Mint your NFT March Madness</title>
        <meta name="description" content="Created by isaaacwgarcia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height="85vh">
        <main className={styles.main}>
          <h1 className={styles.title}>
            Mint your NFT
            <br /> March Madness
          </h1>

          <div className={styles.grid}>
            <button className={styles.card} onClick={() => {}}>
              <Box display="flex" flexDirection="column">
                <h2>Login &rarr;</h2>
                <p>Try it out.</p>
              </Box>
            </button>
          </div>
        </main>
      </Box>
      <footer className={styles.footer}>
        <a
          href="https://twitter.com/isaacwgarcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by @isaacwgarcia
        </a>
      </footer>
    </div>
  );
}
