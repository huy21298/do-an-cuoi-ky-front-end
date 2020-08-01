import React, { createContext, useReducer } from "react";
import { tokenReducer, initToken } from '../reducers/authenticate.reducer';

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, dispatchToken] = useReducer(tokenReducer, initToken);
  const tokenValues = {token, dispatchToken};
  return (
    <TokenContext.Provider value={tokenValues}>
      {children}
    </TokenContext.Provider>
  )
}