import { Col, Layout, Row } from 'antd';
import * as React from 'react';

const { Footer } = Layout

class FooterNav extends React.Component {
  public render() {
    return (
      <Footer>
        <Row>
          <Col span={6}>
            Hello
          </Col>
          <Col span={6}>
            <strong>Links:</strong>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </Col>
          <Col span={6}>
            <strong>SIGs:</strong>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </Col>
          <Col span={6}>
            <strong>Other:</strong>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </Col>
        </Row>
      </Footer>
    );
  }
}

export default FooterNav;
