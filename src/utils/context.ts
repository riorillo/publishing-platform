import React from "react";

export type UserContextType = {
  id?: string;
  topics?: string[];
  accessToken?: string;
};

export const UserContext = React.createContext({});
export const SetUserContext = React.createContext((user: any) => {});
