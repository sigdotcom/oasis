import { Button, Layout, Menu } from "antd";
import React, { useContext } from "react";
import GAPIContext from "../../../context/GAPIContext";

const { Header } = Layout;

const Nav: React.FunctionComponent<{}> = () => {
  const GAPI_CONTEXT = useContext(GAPIContext);
  const signIn = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    const auth2 = gapi.auth2.getAuthInstance();
    auth2
      .signIn({ prompt: "consent" })
      .then((res: gapi.auth2.GoogleUser) => {
        GAPI_CONTEXT.setUser(res);
      })
      .catch((err: { error: string }) => {
        console.error(err);
      });
  };

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Who Are We?</Menu.Item>
        <Menu.Item key="2" disabled={true}>
          Events
        </Menu.Item>
        <Menu.Item key="3" disabled={true}>
          Sponsors
        </Menu.Item>
        <Menu.Item key="4" disabled={true}>
          Officers
        </Menu.Item>
        <Button
          onClick={signIn}
          disabled={GAPI_CONTEXT.user !== undefined ? true : false}
          style={{ float: "right" }}
        >
          Sign In
        </Button>
      </Menu>
    </Header>
  );
};

export default Nav;
