import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";

import { useState } from "react";
import { useRouter } from "next/router";
import { getWalletState } from "../components/Wallet";

export default function Home() {
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  async function callSequence() {
    const wallet = await getWalletState();

    if (!wallet.isConnected()) {
      const connectDetails = await wallet.connect();
      if (connectDetails.connected) {
        console.log("Connected Details 9999", connectDetails);
        router.push("/dashboard");
      }
    } else {
      router.push("/dashboard");
    }
  }

  if (logged) router.push("/dashboard");
  return (
    <div className={styles.container}>
      <Head>
        <title>Mint your NFT March Madness Bracket</title>
        <meta name="description" content="Created by isaaacwgarcia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height="85vh">
        <main className={styles.main}>
          <h1 className={styles.title}>
            Mint your NFT
            <br /> March Madness Bracket
          </h1>

          <div className={styles.grid}>
            <button
              className={styles.card}
              onClick={() => {
                callSequence();
              }}
            >
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
