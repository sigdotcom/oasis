import { Card } from 'antd'
import * as React from 'react';

interface ImyProps {sponsor: any}
interface ImyState {sponsor: any}

class Sponsor extends React.Component<ImyProps, ImyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sponsor: props.sponsor
    }
  }

  public render() {
    return (
      <Card
        style={{ width: 220, margin: 6 }}
        bodyStyle={{ padding: 0 }}
        bordered={false}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      >
        <div>
          {this.state.sponsor.name + " | " + this.state.sponsor.tier}
        </div>
      </Card>
    );
  }
}

export default Sponsor;
