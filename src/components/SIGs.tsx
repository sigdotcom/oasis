import * as React from 'react';
import styled from 'styled-components'
import SIG from './SIG'

const SIGsHolder = styled.div`
display: flex;
margin: auto;
flex-wrap: wrap;
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
  }
]

class SIGs extends React.Component {
  public render() {
    return (
      <SIGsHolder>
        {SIGList.map(sig => (
          <SIG sig={sig}/>
        ))}
      </SIGsHolder>
    );
  }
}

export default SIGs;
