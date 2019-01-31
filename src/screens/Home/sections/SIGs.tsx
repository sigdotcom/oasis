import * as React from 'react';
import styled from 'styled-components'
import SIG from './SIG'

const SIGsTitle = styled.h2`
  color: white;
`

const SIGsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 120px auto;
`

const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1160;
  width: 100%;
  padding: 30px;
  justify-content: center;
`

const SIGList = [
  {
    "advisor": "Ricardo Morales",
    "desc": "I hate computers",
    "discord": "www.google.com",
    "name": "SIGCOMP"
  },
  {
    "advisor": "GOSNELL",
    "desc": "I love computers",
    "discord": "www.google.com",
    "name": "SIGWEB"
  },
  {
    "advisor": "Markowsky",
    "desc": "I love python 2.7",
    "discord": "www.google.com",
    "name": "SIGSEC"
  }

]

class SIGs extends React.Component {
  public render() {
    return (
      <SIGsWrapper>
        <SIGsTitle>Special Interest Groups (SIGs)</SIGsTitle>
        <hr/>
        <CardHolder>
          {SIGList.map((sig, index) => (
            <SIG sig={sig} key={index}/>
          ))}
        </CardHolder>
      </SIGsWrapper>
    );
  }
}

export default SIGs;
