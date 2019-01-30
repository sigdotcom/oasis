import * as React from 'react';
import styled from 'styled-components'

const DescWrapper = styled.div`
margin: 200px auto 60px auto;
display: flex;
max-width: 600px;
`
const DescTitle = styled.h3`
text-align:right;
white-space: nowrap;
padding-right: 60px;
color: #4A798F;
`
const DescText = styled.p`
color: #4A798F;
`

class Description extends React.Component {
  public render() {
    return (
      <DescWrapper>
        <DescTitle>
          MST ACM: Who are we?
        </DescTitle>
        <div>
        <DescText>
      Mosquitofish sauger bigscale bigmouth buffalo freshwater
eel, “red snapper Pacific viperfish Black pickerel, deep sea
bonefish.” Squarehead catfish bramble shark, pencil catfish
warbonnet houndshark European minnow, whiting oceanic.
        </DescText>
        <DescText>
 Mozambique tilapia orbicular batfish wahoo spotted dogfish
lemon shark gudgeon, tailor wormfish Black triggerfish.
Whalefish Australasian salmon Jack Dempsey pike eel
plownose chimaera menhaden, spiny dogfish leopard danio.
        </DescText>
        </div>
      </DescWrapper>
    );
  }
}

export default Description;
