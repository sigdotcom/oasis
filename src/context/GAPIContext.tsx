import React from "react";

export interface GAPIContextProps {
  loaded: boolean;
  user: gapi.auth2.GoogleUser | undefined;
  setUser: (user: gapi.auth2.GoogleUser) => void;
}

const context: GAPIContextProps = {
  loaded: false,
  user: undefined,
  setUser: (user: gapi.auth2.GoogleUser) => {}
};

const GAPIContext = React.createContext<GAPIContextProps>(context);

export default GAPIContext;
