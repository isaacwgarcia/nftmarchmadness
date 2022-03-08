import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Wallet } from "0xsequence";
import { useRouter } from "next/router";
import { getWalletState } from "../components/Wallet";
import { NetworkConfig } from "0xsequence/dist/declarations/src/network";

interface Profile {
  network: string;
  address: string;
  balance: string;
}

export default function Dashboard() {
  const router = useRouter();

  const [wallet, setWallet] = useState<Wallet>();
  const [isConnected, setIsConnected] = useState(true);
  const [user, setUser] = useState<Profile>({
    network: "",
    address: "",
    balance: "",
  });

  async function getStatus() {
    let data: Profile = {
      network: "",
      address: "",
      balance: "",
    };

    try {
      const wallet = await getWalletState();
      setIsConnected(wallet.isConnected());
      setWallet(wallet);
      if (!wallet.isConnected) {
        return;
      } else {
        const nets: NetworkConfig[] = wallet.getSession()?.networks;
        let chain = "";

        nets?.map((net) => {
          if (net.isDefaultChain) {
            chain = net.name;
          }
        });

        const provider = wallet.getProvider();
        const account = await wallet.getAddress();
        const balanceChk1 = await (
          await provider!.getBalance(account)
        ).toString();

        //console.log("123124124141 ", account, balanceChk1, chain);
        data.address = account;
        data.balance = balanceChk1;
        data.network = chain;
        setUser(data);
      }
    } catch (e) {
      console.log("ERROR: Connect first");
    }
  }

  async function handleLogout() {
    console.log("Logging Out");
    wallet.disconnect();
    router.push("/");
  }

  useEffect(() => {
    getStatus();
  }, []);

  if (!isConnected) router.push("/");
  return isConnected ? (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      color="white"
      alignItems="center"
      bgcolor="black"
    >
      <Box height="50vh" width="100%" display="flex" flexDirection="column">
        <h1>DashBoard</h1>
        <div> {user?.address}</div>
        <div> Connected to: {user?.network}</div>
        <div> Balance: {user?.balance}</div>
      </Box>

      <button
        onClick={() => {
          handleLogout();
        }}
      >
        LogOut
      </button>
    </Box>
  ) : (
    <></>
  );
}
