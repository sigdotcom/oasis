import { Button, Layout, Menu } from 'antd';
import * as React from 'react';

const { Header } = Layout

class Nav extends React.Component {
  public render() {
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Who Are We?</Menu.Item>
          <Menu.Item key="2" disabled={true}>Events</Menu.Item>
          <Menu.Item key="3" disabled={true}>Sponsors</Menu.Item>
          <Menu.Item key="4" disabled={true}>Officers</Menu.Item>
          <Button style={{ float: 'right' }}>Sign In</Button>
        </Menu>
      </Header>
    );
  }
}

export default Nav;
