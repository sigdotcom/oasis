import { Layout } from 'antd';
import * as React from 'react';
import { Nav } from './components/index';

const { Content, Footer } = Layout

class App extends React.Component {
  public render() {
    return (
      <Layout className="layout">
        <Nav/>
        <Content style={{ padding: '0 50px' }}/>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
