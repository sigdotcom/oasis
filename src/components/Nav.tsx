import { Layout, Menu } from 'antd';
import * as React from 'react';
import { ReactComponent as ACM } from '../acm.svg';

const { Header } = Layout

class Nav extends React.Component {
  public render() {
    return (
      <Header>
        <ACM />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Nav;
