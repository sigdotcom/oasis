import { Card } from 'antd'
import * as React from 'react';
import styled from 'styled-components'


const DiscordLink = styled.a`
color: #4B99E6;
`

const SIGName = styled.h4`
`
const SIGMeta = styled.div`
  display: flex;
  justify-content: space-between;
`

const SIGDesc = styled.p`
  color: 4A798F;
`

interface ISIGState {sig: any}

function SIG(props: ISIGState) {
  const { name, desc, discord, advisor } = props.sig;
    return (
      <Card
        style={{
          border: undefined,
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)',
          margin: 15,
          width: 300
        }}
      >
        <SIGMeta>
          <SIGName>{name}</SIGName>
          <DiscordLink href={discord}>Discord</DiscordLink>
        </SIGMeta>
        <SIGDesc>{desc}</SIGDesc>
        <div><strong>Advisor:</strong> {advisor}</div>
      </Card>
    );
}

export default SIG;
