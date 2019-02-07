import { Button, Col, Row, Select } from 'antd'
import * as React from 'react'
import checked from './checked.svg'
import './sponsors.css'

const Option = Select.Option
const groupNames = ['ACM', 'PickHacks']

interface IStates {
  selectedGroup: number,
  showSignUp: boolean
}

class SponsorSignUp extends React.Component<{}, IStates> {
  public state: IStates = {
    selectedGroup: 0,
    showSignUp: false
  }
  
  public handleSignUpClick = () => {
    this.setState({showSignUp: !this.state.showSignUp})
  }

  public handleSelectChange = (groupNumber: number) => {
    this.setState({ selectedGroup: groupNumber });
  }

  public render() {
    return (
      <div>
        <Button className='sign-up-btn' onClick={this.handleSignUpClick}>Sign Up</Button>
        <div className={'sign-up-wrapper ' + (this.state.showSignUp ? 'show-wrapper' : 'hide-wrapper')}>
          <div className='table-header'>
            <h1>{groupNames[this.state.selectedGroup]} Sponsorships</h1>
            <Select 
              className='group-selector'
              defaultValue={0}
              onChange={this.handleSelectChange}
            >
              <Option value={0}>ACM</Option>
              <Option value={1}>PickHacks</Option>
            </Select>
          </div>
          {groupList[this.state.selectedGroup]}
        </div>
      </div>
    );
  }
}

const ACM = <div className='tiers-wrapper'>
  <div className='plan-items'>
    <h1 className='tier-header'>Perks</h1>
    <div className='plan-category'>
      <p>Branding</p>
    </div>
    <div className='plan-item'>
      <p>Logo and Description on Website</p>
    </div>
    <div className='plan-item'>
      <p>Logo on All ACM T-Shirts</p>
    </div>
    <div className='plan-item'>
      <p>Logo on ACM's Presentation Introduction Slide</p>
    </div>
    <div className='plan-category'>
      <p>MegaMinerAI</p>
    </div>
    <div className='plan-item'>
      <p>Recognition During Opening & Closing Ceremony</p>
    </div>
    <div className='plan-item'>
      <p>Opening Ceremony Presentation</p>
    </div>
    <div className='plan-item'>
      <p>Dedicated Booth</p>
    </div>
    <div className='plan-category'>
      <p>Cyber Boot Camp</p>
    </div>
    <div className='plan-item'>
      <p>Recognition at Orientation</p>
    </div>
    <div className='plan-item'>
      <p>Title Sponsor (Limit 1)</p>
    </div>
    <div className='plan-item' />
  </div>
  <Row className='tiers'>
    <Col span={6}>
      <div className='tier'>
        <h1 className='tier-header'>$1000</h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
    <Col span={6}>
      <div className='tier'>
        <h1 className='tier-header'>$2000</h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>Small</p>
          </div>
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
    <Col span={6}>
      <div className='tier'>
        <h1 className='tier-header'>$3000</h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>Medium</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>1 Minute</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
    <Col span={6}>
      <div className='tier'>
        <h1 className='tier-header'>$4000</h1>
        <div className='tier-details'>
          <div className='plan-category last-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>Large</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='plan-category last-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>2 Minutes</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='plan-category last-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</div>

const PickHacks = <div className='tiers-wrapper'>
  <div className='plan-items'>
    <h1 className='tier-header'>Perks</h1>
    <div className='plan-category'>
      <p>General</p>
    </div>
    <div className='plan-item'>
      <p>Ceremony Mentions</p>
    </div>
    <div className='plan-item'>
      <p>Send Mentors</p>
    </div>
    <div className='plan-item'>
      <p>Demo at Opening Ceremony</p>
    </div>
    <div className='plan-item'>
      <p>Sponsor Lounge Access</p>
    </div>
    <div className='plan-item'>
      <p>Sponsor Rep. Judge (1)</p>
    </div>

    <div className='plan-category'>
      <p>Branding</p>
    </div>
    <div className='plan-item'>
      <p>Logo on Website</p>
    </div>
    <div className='plan-item'>
      <p>Logo on T-Shirts</p>
    </div>
    <div className='plan-item'>
      <p>Sponsor Table</p>
    </div>
    <div className='plan-item'>
      <p>Distribute Swag</p>
    </div>
    <div className='plan-item'>
      <p>Swag in Bags</p>
    </div>
    <div className='plan-item'>
      <p>Sponsored Workshop/Event</p>
    </div>
    <div className='plan-item'>
      <p>Sponsored Prize</p>
    </div>
    <div className='plan-item'>
      <p>PickHacks, Powered by [You]</p>
    </div>

    <div className='plan-category'>
      <p>Recruiting</p>
    </div>
    <div className='plan-item'>
      <p>Send Recruiters</p>
    </div>
    <div className='plan-item'>
      <p>Distribute Materials</p>
    </div>
    <div className='plan-item'>
      <p>Access to Resumes</p>
    </div>
    <div className='plan-item'>
      <p>Private Interview Room</p>
    </div>
    <div className='plan-item' />
  </div>
  <Row className='tiers'>
    <Col className='col-5'>
      <div className='tier'>
        <h1 className='tier-header stacked'>Bronze <span>$500</span></h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <p>X-Small</p>
          </div>
          <div className='tier-detail-item'>
            <p>X-Small</p>
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
    <Col className='col-5'>
      <div className='tier'>
        <h1 className='tier-header stacked'>Silver <span>$1000</span></h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <p>Small</p>
          </div>
          <div className='tier-detail-item'>
            <p>Small</p>
          </div>
          <div className='tier-detail-item'>
            <p>1</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
    <Col className='col-5'>
      <div className='tier'>
        <h1 className='tier-header stacked'>Gold <span>$3000</span></h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>1 Minute</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <p>Medium</p>
          </div>
          <div className='tier-detail-item'>
            <p>Medium</p>
          </div>
          <div className='tier-detail-item'>
            <p>1</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>Post-Event</p>
          </div>
          <div className='tier-detail-item' />
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
    <Col className='col-5'>
      <div className='tier'>
        <h1 className='tier-header stacked'>Platinum <span>$5000</span></h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>2 Minutes</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <p>Large</p>
          </div>
          <div className='tier-detail-item'>
            <p>Large</p>
          </div>
          <div className='tier-detail-item'>
            <p>1</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item' />
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>Post-Event</p>
          </div>
          <div className='tier-detail-item' />
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
    <Col className='col-5'>
      <div className='tier'>
        <h1 className='tier-header stacked'>Diamond <span>$7000</span></h1>
        <div className='tier-details'>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>5 Minutes</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <p>X-Large</p>
          </div>
          <div className='tier-detail-item'>
            <p>X-Large</p>
          </div>
          <div className='tier-detail-item'>
            <p>2</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='plan-category' />
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-detail-item'>
            <p>Pre-Event</p>
          </div>
          <div className='tier-detail-item'>
            <img src={checked} width='24px' />
          </div>
          <div className='tier-select'>
            <Button className='tier-select-btn'>Select</Button>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</div>

const groupList = [ACM, PickHacks]

export default SponsorSignUp;
