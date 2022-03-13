import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Wallet } from "0xsequence";
import { getWalletState } from "../components/Wallet";
import { useRouter } from "next/router";
import { Loading, Link } from "@nextui-org/react";
import {
  getRowsfromTable,
  initializeTableLand,
  loadJsonToIPFS,
} from "../components/lib/ops";
import { NetworkConfig } from "0xsequence/dist/declarations/src/network";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { connect } from "@textile/tableland";

import { createBracket } from "../components/lib/ops";

interface Profile {
  network: string;
  address: string;
  balance: string;
}

export default function Dashboard() {
  const [userTable, setUserTable] = useState("");
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [brackets, setBrackets] = useState([]);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    console.log("ITEM NAME", item.name);
  };
  const [wallet, setWallet] = useState<Wallet>();
  const [loading, setLoading] = useState(false);
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

  const network =
    user?.network.charAt(0).toUpperCase() + user?.network.slice(1);
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

  async function createBracketHandler(name, description) {
    const [jwt, userTable, address] = await listTablesHandler();
    const res = await createBracket(jwt, name, description, userTable, address);
    console.log("Resolution : ", res);
  }

  async function getRowsHandler() {
    const [jwt, userTable, address] = await listTablesHandler();
    getRowsfromTable(jwt, userTable, address).then((res) => {
      console.log("Resolution getRowsHandler : ", res);
      setBrackets(res as []);
      setLoaded(true);
    });
  }

  async function listTablesHandler(): Promise<[string, string, string]> {
    //GETS THE NAME OF LAST TABLE CREATED.

    console.log("Inside listTablesHandler");
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect(); //Will open MetaMask
    const provider = new ethers.providers.Web3Provider(connection);

    const accounts = await provider.listAccounts();
    const address = accounts[0];
    const signer = provider.getSigner(); //Verifies signer
    const tableLandConnection = await connect({ network: "testnet", signer });
    console.log("JWT From TableLand>", tableLandConnection.token.token);
    const jwt = tableLandConnection.token.token;
    const list_Tables = await tableLandConnection.list();
    const tableName = list_Tables[list_Tables.length - 1].name;
    console.log("list_Tables >", list_Tables[list_Tables.length - 1].name); // For Testing purposes we will retrieve the last table created.
    console.log("TOKEN ", jwt);

    return [jwt, tableName, address];
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
          <div>{user?.address}</div>
          <br />
          <div> Connected to {network}</div>
          <br />
          <div> Balance: {user?.balance}</div> <br />
          <div>
            <br />
            <div>
              To play you will need to authorize 2 transactions:
              <br />
              <br />
              1. To authenticate yourself. <br />
              2. To mint the table that will hold your brackets.
              <br />
              <br />
              <Button
                shadow
                auto
                onClick={() => {
                  initializeTableLand().then((res) => {
                    console.log("Result Table 9999999", userTable);
                    setUserTable(res);
                  });

                  setLoading(true);
                }}
              >
                Start
              </Button>
              <br />
              {loading && <Loading type="points" size="xl" />}
              <br />
            </div>

            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  <Text b size={18}>
                    CREATE YOUR BRACKET
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
                <Button
                  auto
                  onClick={() => {
                    console.log("Just Clicked in Proceed");
                    createBracketHandler(item.name, item.description).then(
                      (res) => {
                        closeHandler();
                      }
                    );
                  }}
                >
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
          <Box>
            <Button
              disabled={false}
              auto
              shadow
              onClick={() => {
                console.log("SHOWING BRACKETS");
                getRowsHandler();
              }}
            >
              Show Brackets
            </Button>
            <br />
            <br />
            <Button
              disabled={false}
              auto
              shadow
              onClick={() => {
                handler();
              }}
            >
              Mint your bracket
            </Button>
            <br />
            <br />
            {/*     <Button             //INITIAL TEAMS UPLOAD
              disabled={false}
              auto
              shadow
              onClick={() => {
                loadJsonToIPFS();
              }}
            >
              Load JSONS
            </Button> */}
          </Box>
          <br /> <br />
          {loaded ? (
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color="white"
              bgcolor="black"
            >
              {brackets.map((bracket) => {
                return (
                  <div key={bracket[0]}>
                    <Link block icon={true} color="primary">
                      {bracket[1]}
                    </Link>
                    <br /> <br />
                  </div>
                );
              })}
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <br />
      <br />
      <br />

      <Button
        color="error"
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
