import { Button, Card } from 'antd'
import * as React from 'react';
import styled from 'styled-components'

const SIGName = styled.h4`
`
const SIGMeta = styled.div`
display: flex;
`

interface ImyProps {sig: any}
interface ImyState {sig: any}

class SIG extends React.Component<ImyProps, ImyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sig: props.sig
    }
  }

  public render() {
    return (
      <Card>
        <SIGMeta>
          <SIGName>{this.state.sig.name}</SIGName>
          <Button>{this.state.sig.discord}</Button>
        </SIGMeta>
        <p>{this.state.sig.desc}</p>
        <div><strong>Advisor:</strong> {this.state.sig.advisor}</div>
      </Card>
    );
  }
}

export default SIG;
