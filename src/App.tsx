import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import GAPIContext, { GAPIContextProps } from "./context/GAPIContext";
import {
  Events,
  FourZeroFour,
  Home,
  Membership,
  Products,
  Sigs,
  Sponsors,
  Tools
} from "./screens";

const handleGAPIinit = (
  setUser: (user: gapi.auth2.GoogleUser) => void
): void => {
  const params = {
    access_type: "online",
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    cookie_policy: "single_host_origin",
    fetch_basic_profile: true,
    hosted_domain: "mst.edu",
    scope: "profile email",
    ux_mode: "popup" as "popup"
  };

  gapi.load("auth2", () => {
    if (!gapi.auth2.getAuthInstance()) {
      gapi.auth2.init(params).then(
        // For this to work, the user must allow cookies from
        // accounts.google.com. Will automatically refresh tokens.
        (res: gapi.auth2.GoogleAuth) => {
          if (res.isSignedIn.get()) {
            setUser(res.currentUser.get());
          }
        },
        (err: { error: string }) => console.error(err)
      );
    }
  });
};

const App: React.FunctionComponent<{}> = (): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<gapi.auth2.GoogleUser | undefined>(
    undefined
  );
  const updateUser = (user: gapi.auth2.GoogleUser): void => {
    setUser(user);
  };

  const gapi_props: GAPIContextProps = {
    loaded,
    user,
    setUser: updateUser
  };

  useEffect(() => {
    // Loaded in public/index.html.
    if ((window as any).gapi) {
      handleGAPIinit(updateUser);
      setLoaded(true);
    } else {
      if (document.querySelector("#google-js")) {
        document.querySelector("#google-js")!.addEventListener("load", () => {
          handleGAPIinit(updateUser);
          setLoaded(true);
        });
      } else {
        console.error(
          "#google-js is not in the DOM. Please contact acm@mst.edu."
        );
      }
    }
  }, []);

  return (
    <GAPIContext.Provider value={gapi_props}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/tools" component={Tools} />
          <Route exact={true} path="/tools/membership" component={Membership} />
          <Route exact={true} path="/tools/events" component={Events} />
          <Route exact={true} path="/tools/sigs" component={Sigs} />
          <Route exact={true} path="/tools/sponsors" component={Sponsors} />
          <Route exact={true} path="/tools/products" component={Products} />
          <Route component={FourZeroFour} />
        </Switch>
      </BrowserRouter>
    </GAPIContext.Provider>
  );
};

export default App;
