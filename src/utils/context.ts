import React from "react";

export type UserContextType = {
  id?: string;
  username?: string;
  topics?: string[];
  accessToken?: string;
  avatar?: string;
};

export const UserContext = React.createContext({});
export const SetUserContext = React.createContext((user: any) => {});
