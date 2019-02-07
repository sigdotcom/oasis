import { Layout } from 'antd'
import * as React from "react"
import { FooterNav, Nav } from '../Home/sections'
import './sponsors.css'
import SponsorSignUp from './SponsorSignUp'

const Content = Layout

const Sponsors = () => {
  return (
    <Layout className="layout">
      <Nav/>
      <Content>
        Sponsors <strong>page</strong><br />
        <SponsorSignUp />
      </Content>
      <FooterNav />
    </Layout>
  )
}
export default Sponsors