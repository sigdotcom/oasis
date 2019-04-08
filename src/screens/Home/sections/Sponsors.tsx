import * as React from "react";

import { Button } from "antd";
import styled from "styled-components";
import Sponsor from "./Sponsor";

const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: grey;
  margin: auto;
`;
const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SponsorList = [
  {
    name: "Tradebot",
    tier: "Sponsor"
  },
  {
    name: "Garmin",
    tier: "Sponsor"
  }
];

class Sponsors extends React.Component {
  public render() {
    return (
      <SponsorsWrapper>
        <CardHolder>
          {SponsorList.map((sponsor, index) => (
            <Sponsor sponsor={sponsor} key={index} />
          ))}
        </CardHolder>
        <Button>Learn More</Button>
      </SponsorsWrapper>
    );
  }
}

export default Sponsors;
