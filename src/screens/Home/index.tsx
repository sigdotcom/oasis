import { Layout } from 'antd';
import * as React from 'react';
import { Description, FooterNav, MemberSpot, Nav, SIGs, Sponsors } from './sections'
const { Content } = Layout

const Home = () => {
    return (
      <Layout className="layout">
        <Nav/>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Description/>
          <SIGs/>
          <Sponsors/>
          <MemberSpot/>
        </Content>
        <FooterNav/>
      </Layout>
    );
}

export default Home;
