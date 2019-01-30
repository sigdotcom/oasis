import { Button } from 'antd'
import * as React from 'react'
import styled from 'styled-components'

const SpotWrapper = styled.div`
margin: auto;
display: inline-flex;
flex-direction: column;
justify-content: center;
max-width: 400px;
`
const SpotText = styled.h3`
`

class MemberSpot extends React.Component {
  public render() {
    return (
      <SpotWrapper>
        <SpotText>
          Become an MST ACM member and enjoy our perks today!
        </SpotText>
        <div style={{ display: 'flex' }}>
          <Button style={{ margin: 'auto' }}>What Perks?</Button>
        </div>
      </SpotWrapper>
    );
  }
}

export default MemberSpot;
