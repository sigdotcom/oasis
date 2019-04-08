import { Divider, Table } from 'antd';
import * as React from 'react';

interface IMemberTableProps {
  users: any,
}

class MemberTable extends React.Component<IMemberTableProps, {}> {
  private col = [{
    key: 'firstName',
    render: (record: any) => (
      <span>
        {record.firstName} {record.lastName}
      </span>
    ),
    title: 'firstName',
  }, {
    dataIndex: 'email',
    key: 'email',
    title: 'Email',
  }, {
    // dataIndex: 'membershipExpiration',
    key: 'membershipExpiration',
    render: (record: any) => (
      <span>
        {this.dateCheck(record.membershipExpiration)}
      </span>
    ),
    title: 'membershipExpiration',
  }, {
    key: 'action',
    render: (record: any) => (
      <span>
        <a onClick={this.logParam(record.firstName)}>Edit</a>
        <Divider type="vertical" />
        <a onClick={this.delete(record.id)}>Delete</a>
      </span>
    ),
    title: 'Action',
  }];

  public dateCheck = (date: any) => {
    let d = ''
    const da = new Date(date);
    const now = new Date(Date.now());
    
    console.log(typeof date, date)
    console.log(typeof da, da)

    if(da > now) {
      d = 'active'
    } else if (da <= now) {
      d = 'inactive'
    } else {
      d = 'invalid'
    }
    return d
  }
  
  // TODO: implememt this -> search through thing and delete, might want to make search first?
  // public delete = (id: any) => (e: any) => {
  // }
  public delete =(id: any) => (e: any) => {
    console.log(id)

    // this.dateCheck("2019-04-07T22:58:07.508Z")

    // fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members/'+id, {method: 'DELETE'})
    //   .then(results => {
    //     console.log(results);
    //     return results.json();
    //   }).then(data => {
    //     console.log(data);
    //     // const userInfo = data
    //     // this.setState({users: userInfo})
    //     this.componentDidMount();
    //   })
  }

  public componentDidMount() {
    fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members')
      .then(results => {
        console.log(results)
        return results.json();
      }).then(data => {
        const userInfo = data
        this.setState({ users: userInfo })
      })
  }

  public logParam = (name: any) => (e: any) => console.log(name);
  public printUsers = () => console.log(this.props.users);

  public render(): JSX.Element {
    return (
      <div>
        <Table columns={this.col} dataSource={this.props.users} 
          pagination={{ defaultPageSize: 100 }} />
      </div>
    );
  }
}

export default MemberTable as any;


// class TableRow extends React.Component {
  
//   constructor (props: any) {
//     super(props);
//     this.state = {
//       firstName: 

//     };
//   }
// }

/*
  date time picker when clicking on "edit membership" as an "Action tab"
  makes a Patch Request to server saying, I want to change this member's time to _X_ or able to delete member


  date time  "edit" -> put request
  delete-> delete request

  https://ant.design/components/table/#components-table-demo-edit-cell
    - going to have to make a class for each table row 
    - add users into that class (one for each)
    - then have table of new class
      -> instead of adding users into table


    https://motion.ant.design/exhibition/demo/table-enter-leave


*/