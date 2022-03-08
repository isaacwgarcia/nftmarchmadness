import { sequence } from "0xsequence";

export async function getWalletState() {
  if (typeof window !== "undefined") {
    const wallet = new sequence.Wallet("rinkeby");
    return wallet;
  }
}
