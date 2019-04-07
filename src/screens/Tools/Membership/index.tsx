import { Input } from 'antd';
import * as React from "react";
import MemberList from './MemberList';

  // interface IAccountProps{
  //   accounts: any[];
  //   createItem: (context: any) => any;
  //   classes: any;
  // }

  // interface IAccount{
  //   name: string;
  //   email: string;
  //   status: string;
  // }
  // class Account extends React.Component<IAccountProps, IAccount> {
  //   public state: IAccount = {
  //     name: "Name test",
  //     email: "Email@mst.edu",
  //     status: "Status test"
  //   };

  //   public handleChange = (name : keyof IAccount) => (event : any) => {
  //     this.setState({
  //       name: event.target.value,
  //     } as Pick<IAccount, keyof IAccount>);
  //   };
  // }

const background = {
  backgroundColor: "lightgreen",
}
const tableArea = {
  align: "center",
  width: "80%",
};

class Membership extends React.Component {
  public Search = Input.Search;

  constructor (props: any) {
    super(props);
    this.state = {
      data: [],
      users: [],
    };
  }
  public log = () => console.log(this.state);

  public componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(results => {
        return results.json();
      }).then(data => {
        const userInfo = data.results
        this.setState({users: userInfo})
      })
  }

  public search = () => {
    console.log(this.state);
  }

  public render(): JSX.Element {
    // const { accounts } = this.props;
    return (
      <div style={background}>
      <div style={tableArea}>    
        <this.Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={this.search}
        />
        <this.Search
          placeholder="click for props"
          enterButton="Show Props?"
          size="large"
          onSearch={this.log}
        />
        
        <h1>before</h1>
        {/*  this is how you pass info from one class to the next
              "stateFromParent" -> whatever is being set equal to
              has to be in the child class' props interface
         */}
        <MemberList stateFromParent={this.state}/>
        <h1>after</h1>

        <br /><br />
      </div>
      </div>
    );
};
}



export default Membership as any

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Notes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

kevin's code
  https://github.com/kevinschoonover/jeeves/blob/client/admin/clients/admin/src/pages/restaurant/Page.tsx
  https://github.com/kevinschoonover/jeeves/blob/client/admin/clients/admin/src/navigation/App.Bar.tsx
  https://github.com/kevinschoonover/jeeves/blob/client/admin/clients/admin/src/components/RestaurantList.tsx

sources
for the package json thing
  - https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33311

Example that Kevin gave us
https://acm.mst.edu/web-api/accounts/?fora=json
https://acm.mst.edu/tools/membership


*/