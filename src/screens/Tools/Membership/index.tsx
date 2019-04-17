import { Input, Row } from 'antd';
import * as React from "react";
import MemberTable from './MemberTable';

interface IMembersipState{
  users: any[];
}

const tableArea = {
  width: "80%",
};
const padding = {
  paddingBottom: "25px",
  paddingTop: "25px",
};

class Membership extends React.Component<{}, IMembersipState> {
  public Search = Input.Search;

  constructor (props: any) {
    super(props);
    this.state = {
      users: [],
    };
  }
  public log = () => console.log(this.state);

  public componentDidMount() {
    fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members')
      .then(results => {
        console.log(results)
        return results.json();
      }).then(data => {
        const userInfo = data
        this.setState({users: userInfo})
      })
  }

  public search = (value: any) => {
    
    if (value === '') {
      this.componentDidMount();
    }

    const words = value.split(' ');
    // const fName = words[0];
    // const lName = words[1];
    const p =  this.state.users.filter((element: any) => {
      for (const word of words) {
        if (element.firstName.toLowerCase() === word.toLowerCase()) { return true; }
        if (element.lastName.toLowerCase() === word.toLowerCase()) { return true; }
        if (element.email.toLowerCase() === word.toLowerCase()) { return true; }
        // return false;
      }
      
      return false;
      // return element.firstName.toLowerCase() === fName.toLowerCase() || element.lastName.toLowerCase() === lName.toLowerCase();
    });
    this.setState({ users: p })
  }

  public onDeleteUpdateState(id: any) {
    const newArr = this.state.users.filter((element: any) => {
      return element.id !== id;
    })
    this.setState({ users: newArr })
  }

  public delete = (id: any) => async (e: any) => {
    try {
      console.log('before: ', this.state.users);
      const response = await fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members/' + id, { method: 'DELETE' });
      const data = await response.json();
      console.log('deleted: ', data);
      this.onDeleteUpdateState(data.id);

      fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members')
        .then(results => {
          console.log(results)
          return results.json();
        }).then(info => {
          const userInfo = info;
          this.setState({ users: userInfo });
          console.log('after: ', this.state.users);
        })

    } catch (err) {
      console.error(err);
    }
  }

  public put = (id: any, date: any) => async (e: any) => {
    const response = await fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members/' + id, {
      body: JSON.stringify({
        membershipExpiration: date,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      mode: 'cors',
    });
    const data = await response.json();
    console.log(data);
    
    fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members')
      .then(results => {
        console.log(results)
        return results.json();
      }).then(info => {
        const userInfo = info;
        this.setState({ users: userInfo });
        console.log('after: ', this.state.users);
      })
      // .then(results => {
      //   console.log("results: ", results);
      //   return results.json();
      // }).then(data => {
      //   console.log("data: ", data);
      //   const userInfo = data;

      //   this.setState({ users: userInfo })
      // }).catch(err => {
      //   console.log(err);
      // })
  }

  public render(): JSX.Element {
    // const { accounts } = this.props;
    return (
      <div>
        <Row type="flex" justify="center">
          <div style={tableArea}>   
            <this.Search
              style={padding}
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={this.search}
            />

            {/*  this is how you pass info from one class to the next
                  "stateFromParent" -> whatever is being set equal to
                  has to be in the child class' props interface
            */}
            {/* TDOO: "users" is going to have to be a bunch of "newClass -> table rows" */}
            <MemberTable usersProps={this.state.users} delete={this.delete} put={this.put}/>
            <br /><br />
          </div>
        </Row>
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