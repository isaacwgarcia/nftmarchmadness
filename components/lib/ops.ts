import { connect } from "@textile/tableland";
import { getWalletState } from "../Wallet";

export async function getToken(): Promise<string> {
  const wallet = await getWalletState();
  const signer = wallet.getSigner();
  const tbl = await connect({
    network: "rinkeby",
    host: "https://testnet.tableland.network",
    signer,
  });
  return tbl.token.token;
}
