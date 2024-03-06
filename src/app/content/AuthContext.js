import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ Children }) => {
  const [user, setUser] = useState("clint");
  return <AuthContext.Provider value={{user}}>{Children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
