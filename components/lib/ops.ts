import { connect, Connection, Token } from "@textile/tableland";
import { getWalletState } from "../Wallet";
import { create } from "ipfs-http-client";
//import { teams } from "./data/teams";
import {
  dataA,
  dataB,
  dataC,
  dataD,
} from "../../components/lib/data/structure";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import GROUPA from "../../components/lib/data/groupA.json";
import GROUPB from "../../components/lib/data/groupB.json";
import GROUPC from "../../components/lib/data/groupC.json";
import GROUPD from "../../components/lib/data/groupD.json";
import FINALGROUP from "../../components/lib/data/finalGroup.json";

const newLocal = process.env.INFURA_IPFS;
const IPFS_CLIENT = create({
  url: newLocal,
});

const templateA = dataA;

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

  console.log("getDataFromIPFS url> ", url);
  const res = fetch(url, requestOptions)
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
  console.log("INSIDE LOAD TEAMS ", process.env.TEAMSA_IPFS);
  const dataFromIPFS = await getDataFromIPFS(process.env.TEAMSA_IPFS);
  console.log("dataFromIPFS > ", dataFromIPFS);
  templateA.forEach((res) => {
    res.participants.map((res) => {
      dataFromIPFS.forEach((team) => {
        if (team.id === parseInt(res.id))
          res.name = "ID " + res.id + " " + team.name;
      });
    });
  });
  console.log("Data to render > ", templateA);
}

export async function connectTableLand(): Promise<Connection> {
  const wallet = await getWalletState();
  const signer = wallet.getSigner();
  const connection = await connect({
    network: "rinkeby",
    host: process.env.TABLELAND_ENDPOINT,
    signer,
  });

  return connection;
}

export async function listTables(): Promise<Connection> {
  const wallet = await getWalletState();
  const signer = wallet.getSigner();
  const connection = await connect({
    network: "rinkeby",
    host: process.env.TABLELAND_ENDPOINT,
    signer,
  });
  //console.log("TABLES FROM USER>>> ", connection.list());
  return connection;
}

export async function testToken(): Promise<Token> {
  const wallet = await getWalletState();
  const signer = wallet.getSigner();
  const { token } = await connect({ signer });
  return token;
}

export async function initializeTableLand(): Promise<string> {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect(); //Will open MetaMask
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner(); //Verifies signer
  const tableLandConnection = await connect({ network: "testnet", signer });
  console.log("JWT From TableLand>", tableLandConnection.token.token);
  const jwt = tableLandConnection.token.token;
  let nameTable = "";
  let description = "My First Bracket";
  const createRes = await tableLandConnection
    .create(
      `CREATE TABLE MY_BRACKETS ( id serial, name text, image text, description text, groupA json, groupB json, groupC json, groupD json, finalGroup json, primary key (id));`,
      { description: "My Brackets Table" }
    )
    .then((res) => {
      nameTable = res.name;
      console.log("JWT ", jwt);
      console.log("nameTable ", nameTable);
      console.log("description ", description);
      return nameTable;
    });
  return nameTable;
  //initializeTable(jwt, "my_brackets_380", description);
}

export async function createBracket(
  jwt: string,
  name: string,
  description: string,
  userTable: string
) {
  //CREATE A BRACKET CALL SIGN HERE TO GET JWT
  ////////////////////////////////////////////////
  //TO DO RETRIEVE TABLE NAME PER USER
  ////////////////////////////////////////////////

  console.log(
    "Just entered create Bracket with Table Name >>>>> 6666666666 ",
    userTable
  );
  /*  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect(); //Will open MetaMask
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner(); //Verifies signer
  const tableLandConnection = await connect({ network: "testnet", signer }); */
  console.log("JWT From TableLand>", jwt);
  const token = jwt;

  ///////////////////////
  console.log("Just entered modifyTable() with ", name);
  const groupA = GROUPA;
  const groupB = GROUPB;
  const groupC = GROUPC;
  const groupD = GROUPD;
  const groupFinal = FINALGROUP;

  //TODO ID CHANGE TO
  const query =
    "INSERT INTO " +
    userTable +
    " " +
    " (name, image, description, groupA, groupB, groupC, groupD, finalGroup ) VALUES ('" +
    name +
    "', 'Image of My Bracket','" +
    description +
    "','" +
    JSON.stringify(groupA) +
    "','" +
    JSON.stringify(groupB) +
    "','" +
    JSON.stringify(groupC) +
    "','" +
    JSON.stringify(groupD) +
    "','" +
    JSON.stringify(groupFinal) +
    "');";

  console.log("Query > ", query);

  const headers = {
    Authorization: `Bearer ` + token,
    "Content-Type": "application/json",
  };

  const executeQuery = await fetch(process.env.TABLELAND_ENDPOINT_RPC, {
    method: "POST",
    headers: headers,
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit

    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client

    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "tableland_runSQL",
      id: 1,
      params: [
        {
          controller: "0xE7ab2D31396a89F91c4387ad88BBf94f590e8eB1", //TODO GET ADDRESS FROM METAMASK
          statement: query,
        },
      ],
    }),
  });

  const batches = [] as any;

  batches.push(executeQuery);
  return Promise.all(batches).then((content) => content.flat());
}

export async function getRowsfromTable(jwt: string, userTable: string) {
  //CREATE A BRACKET CALL SIGN HERE TO GET JWT
  ////////////////////////////////////////////////
  //TO DO RETRIEVE TABLE NAME PER USER
  ////////////////////////////////////////////////

  console.log(
    "Just entered create Bracket with Table Name >>>>> 6666666666 ",
    userTable
  );
  /*  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect(); //Will open MetaMask
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner(); //Verifies signer
  const tableLandConnection = await connect({ network: "testnet", signer }); */
  console.log("JWT From TableLand>", jwt);
  const token = jwt;

  ///////////////////////

  //TODO ID CHANGE TO
  const query = "SELECT ID, NAME FROM " + userTable + ";";

  console.log("Query > ", query);

  const headers = {
    Authorization: `Bearer ` + token,
    "Content-Type": "application/json",
  };

  const executeQuery = await fetch(process.env.TABLELAND_ENDPOINT_RPC, {
    method: "POST",
    headers: headers,
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit

    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client

    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "tableland_runSQL",
      id: 1,
      params: [
        {
          controller: "0xE7ab2D31396a89F91c4387ad88BBf94f590e8eB1", //TODO GET ADDRESS FROM METAMASK
          statement: query,
        },
      ],
    }),
  });

  const jsonResult = await executeQuery.json();
  const responseData = jsonResult.result.data.rows;
  console.log("EXXXXXXX", responseData);
  return responseData;
}
