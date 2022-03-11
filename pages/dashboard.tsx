import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Wallet } from "0xsequence";
import { getWalletState } from "../components/Wallet";
import { useRouter } from "next/router";

import { NetworkConfig } from "0xsequence/dist/declarations/src/network";
import { Modal, Button, Text, Input, Link } from "@nextui-org/react";

interface Profile {
  network: string;
  address: string;
  balance: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    console.log("ITEM NAME", item.name);
  };
  const [wallet, setWallet] = useState<Wallet>();
  const [isConnected, setIsConnected] = useState(true);
  const updateField = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const [item, setItem] = useState({
    name: "",
    description: "",
  });

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
      <Box display="flex" flexDirection="row" width="100%">
        <Box
          height="50vh"
          width="60%"
          display="flex"
          flexDirection="column"
          sx={{ mx: "10%" }}
        >
          <h1>DashBoard</h1>
          <div> {user?.address}</div>
          <div> Connected to: {user?.network}</div>
          <div> Balance: {user?.balance}</div> <br />
          <br />
          <div>
            <br />
            <Button auto shadow onClick={handler}>
              Mint your bracket
            </Button>
            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  <Text b size={18}>
                    CREATE YOUR BRACKER
                  </Text>
                  <br />
                  Set up multiple brackets and make picks.
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={item.name || ""}
                  onChange={updateField}
                />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Description"
                  name="description"
                  id="description"
                  value={item.description || ""}
                  onChange={updateField}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button auto flat color="error" onClick={closeHandler}>
                  Close
                </Button>
                <Button auto onClick={() => {}}>
                  Proceed
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Box>
        <Box
          height="50vh"
          width="100%"
          display="flex"
          flexDirection="column"
          alignContent="left"
          sx={{ mx: "5rem" }}
        >
          {/*  TODO: LOAD LIST OF BRACKETS */}
          <Link block color="primary" href="#">
            First Bracket
          </Link>
        </Box>
      </Box>
      <br />
      <br />
      <br />

      <Button
        color="gradient"
        auto
        shadow
        onClick={() => {
          handleLogout();
        }}
      >
        LogOut
      </Button>
    </Box>
  ) : (
    <></>
  );
}
