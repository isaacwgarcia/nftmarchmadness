import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import { sequence } from "0xsequence";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  async function callSequence() {
    console.log("callSequence");
    const network = "rinkeby";
    const wallet = new sequence.Wallet(network);
    console.log("Connecting");
    if (!wallet.isConnected()) {
      console.log("NOT CONNECTED");
      const connectDetails = await wallet.connect({
        app: "NFTMarchMadness",
        authorize: true, // <---<<< this will automatically sign+verify a EIP712 message when user clicks "Connect"
      });
      if (connectDetails.connected) setLogged(true);
    } else {
      console.log("ALREADY CONNECTED");
      router.push("/dashboard");
      //wallet.openWallet();
    }
  }
  if (logged) router.push("/dashboard");
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
