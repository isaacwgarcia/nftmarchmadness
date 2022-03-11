import { connect, Connection, Token } from "@textile/tableland";
import { getWalletState } from "../Wallet";
import { create } from "ipfs-http-client";
//import { teams } from "./data/teams";
import { initialData } from "../../components/lib/data/structure";

const newLocal = process.env.INFURA_IPFS;
const IPFS_CLIENT = create({
  url: newLocal,
});

const template = initialData;

/* 
// TO UPLOAD JSON TO IPFS FOR THE FIRST TIME
const teamList = teams;   
async function uploadMetadata(teamList) {
  try {
    const added = await IPFS_CLIENT.add(Buffer.from(JSON.stringify(teamList)), {
      progress: (prog) => console.log(`received: ${prog}`),
    });
    const url = `https://ipfs.infura.io/ipfs/${added.path}`;
    console.log("URL> ", url);
    return url;
  } catch (error) {
    console.log("Error uploading file: ", error);
    return error;
  }
}

export async function loadJsonToIPFS() {
  console.log("Loading Json");
  const response = await uploadMetadata(teamList);
} */

export async function getDataFromIPFS(url) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, requestOptions)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("error Fetching: ", err);
      return err;
    });

  return res;
}

export async function loadTeams() {
  const dataFromIPFS = await getDataFromIPFS(process.env.URL_TEAMS_IPFS);

  template.forEach((res) => {
    res.participants.map((res) => {
      dataFromIPFS.forEach((team) => {
        if (team.id === parseInt(res.id)) res.name = team.name;
      });
    });
  });
}

export async function connectTableLand(): Promise<Connection> {
  const wallet = await getWalletState();
  const signer = wallet.getSigner();
  const tbl = await connect({
    network: "rinkeby",
    host: process.env.TABLELAND_ENDPOINT,
    signer,
  });
  return tbl;
}

export async function testToken(): Promise<Token> {
  const wallet = await getWalletState();
  const signer = wallet.getSigner();
  const { token } = await connect({ signer });
  return token;
}
