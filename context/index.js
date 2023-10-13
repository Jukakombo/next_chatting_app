"use client";
import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = { username, setUsername, setSecret, secret };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
