import "../styles/globals.css";
import React, { useReducer } from "react";

import { AppContext } from "../components/State/context";
import { appReducer } from "../components/State/reducer";
import { initialAppOwnerState } from "../components/State/state";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(appReducer, initialAppOwnerState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
