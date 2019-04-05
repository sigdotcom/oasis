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

const divStyle = {
  backgroundColor: "pink",
};

class Membership extends React.Component {
  public Search = Input.Search;

  constructor (props: any) {
    super(props);
    this.state = {
      data: [
        {
          email: "email",
          enrolled: "no",
          id: 1,
          name: "name",
        },
        {
          email: "email2",
          enrolled: "yes",
          id: 2,
          name: "name2",
        },
      ],
      jsData: "a",
      pictures: [],
    };
  }
  public log = () => console.log(this.state);

  // public componentDidMount() {
  //   fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members')
  //     // .then(response => response.json())
  //     .then(
  //       (response) => {
  //         this.setState({
  //           jsData: response
  //         });
  //       }
  //     )
        
  //     //   data => this.setState({ data }));
  //     // this.log(response);
  // }

  // https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
  public componentDidMount() {
    // fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members')
    fetch('https://randomuser.me/api/?results=10')
      .then(results => {
        return results.json();
      }).then(data => {
        const pict = data.results.map((pic: any) => {
          return(
        //     // <div key={pic.results}>
        //       <h1 key="">{pic}</h1>
        //     // <tr key={pic.id}>
        //     //   <th>{pic.name.last}, {pic.name.first}</th>
        //     //   <th>{pic.email}</th>
        //     //   <th>{pic.gender}</th>
        //     // </tr>
        //     // </div>
            
            pic
            


          )
        })

        this.setState({ data: {pict} });



        // this.setState({ pictures: {pict} });

        // const info = data.results;
        // console.log("state", info);
        // this.setState({ pictures: info.name.first});
      })
  }


  public search = (value: string) => {
    this.componentDidMount()
    console.log(value);
  }

  public render(): JSX.Element {
    // const { accounts } = this.props;
    return (
      <div style={divStyle}>        
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
        {/* <h1 id="name"><b>Name</b></h1>
        <h1 id="email"><b>Email</b></h1>
        <h1 id="status"><b>Status</b></h1> */}


        
        <h1>before</h1>
        {/*  this is how you pass info from one class to the next
              "stateFromParent" -> whatever is being set equal to
              has to be in the child class' props interface
         */}
        <MemberList stateFromParent={this.state}/>
        <h1>after</h1>

        <br /><br />
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