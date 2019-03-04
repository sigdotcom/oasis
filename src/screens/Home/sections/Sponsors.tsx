import { Button } from 'antd'
import * as React from 'react'
import styled from 'styled-components'
import Sponsor from './Sponsor'

const TitleText = styled.h3`
color: #376B83;
margin: 60px 0 30px 0;
font-size: 24px;
`

const SponsorsStyleWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
height: 400px;
padding: 0 40px;
`

const SponsorsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: auto;
background: white;
box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
width: 100%;
max-width: 1200px;
height: 400px;
`
const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
`

const SponsorList = [
  {
    "name": "Tradebot",
    "tier": "Sponsor"
  },
  {
    "name": "Garmin",
    "tier": "Sponsor"
  }
]

class Sponsors extends React.Component {
  public render() {
    return (
      <SponsorsStyleWrapper>
        <SponsorsWrapper>
          <TitleText>Thanks to our Sponsors and Partners!</TitleText>
          <CardHolder>
            {SponsorList.map((sponsor, index) => (
              <Sponsor sponsor={sponsor} key={index}/>
            ))}
          </CardHolder>
          <Button style={{ margin: "30px 0 60px 0" }}>Learn More</Button>
        </SponsorsWrapper>
      </SponsorsStyleWrapper>
    );
  }
}

export default Sponsors;
