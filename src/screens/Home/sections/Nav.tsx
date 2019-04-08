import { Button, Layout, Menu } from "antd";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from "react-google-login";
import * as React from "react";

const { Header } = Layout;

class Nav extends React.Component {
  private async submitGoogleToken(
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) {
    const GOOGLE_LOGIN: GoogleLoginResponse = response as GoogleLoginResponse;
    const ID_TOKEN: string = GOOGLE_LOGIN.getAuthResponse().id_token;
    console.log(ID_TOKEN);
  }

  public render() {
    // See .venv in project root
    const GOOGLE_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
    const error = (response: any) => console.error(response);

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
          <GoogleLogin
            clientId={GOOGLE_ID}
            prompt="consent"
            hostedDomain="mst.edu"
            render={(renderProps?: { onClick: () => void }) => (
              <Button
                onClick={renderProps ? renderProps.onClick : undefined}
                disabled={renderProps ? false : true}
                style={{ float: "right" }}
              >
                Sign In
              </Button>
            )}
            buttonText="Login"
            onSuccess={this.submitGoogleToken}
            onFailure={error}
          />
        </Menu>
      </Header>
    );
  }
}

export default Nav;
