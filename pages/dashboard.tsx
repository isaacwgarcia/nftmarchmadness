import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { sequence } from "0xsequence";
import { useRouter } from "next/router";

export default function Dashboard() {
  const wallet = new sequence.Wallet("rinkeby");
  const isConnected = wallet.isConnected();
  const router = useRouter();
  async function handleLogout() {
    console.log("Logging Out");
    wallet.disconnect();
    router.push("/");
  }

  if (!isConnected) router.push("/");
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      bgcolor="black"
    >
      DashBoard
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        LogOut
      </button>
    </Box>
  );
}
