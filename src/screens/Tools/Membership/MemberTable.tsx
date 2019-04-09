import { Divider, Table } from 'antd';
// import { DatePicker } from 'antd';
// import { Button, Popover } from 'antd';
// import * as moment from 'moment';
import { Input } from 'antd'
import * as React from 'react';

interface IMemberTableProps {
  openDatePicker: boolean;
  n_test: any,
  visible_array: any,
}

interface IMemberTableState {
  visible: any,
  users: any,
  openDatePicker: boolean,
}

// const dateFormat = 'MM/DD/YYYY';

class MemberTable extends React.Component<IMemberTableProps, IMemberTableState> {
  public Search = Input.Search;

  private col = [{
    key: 'firstName',
    render: (record: any) => (
      <span>
        {record.firstName} {record.lastName}
      </span>
    ),
    title: 'Name',
  }, {
    dataIndex: 'email',
    key: 'email',
    title: 'Email',
  }, {
    key: 'membershipExpiration',
    render: (record: any) => (
      <span>
        {this.dateCheck(record.membershipExpiration)}
      </span>
    ),
    title: 'Active',
  }, {
    key: 'action',
    render: (record: any) => (
      <span>

        <this.Search
          placeholder="MM/DD/YYYY"
          onSearch={this.logParam}
          style={{ width: 150 }}
        />

        {/* <a onClick={this.put(record.id, record, "2020-04-07T08:24:01.378Z")}>Edit Date</a> */}
        <Divider type="vertical" />
        <a onClick={this.delete(record.id)}>Delete</a>
      </span>
    ),
    title: 'Action',
  }];

  

  // * https://stackoverflow.com/questions/52633932/reactjs-ant-design-open-datepicker-on-button-click
  // public togglePicker() {
  //   this.setState(prevState => ({
  //     openDatePicker: !prevState.openDatePicker
  //   }));
  // }

  constructor(props: any) {
    super(props);
    this.state = {
      openDatePicker: false,
      users: [],
      visible: this.func(this.props.n_test),
      // visible: false,
    }
  }

  public func = (users: any) => {
    console.log('nathan: ', users);
    return false;
  }


  public hide = () => {
    console.log('fart');
  }

  public handleVisibleChange = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }))
  }

  public changeDate = (date: any, dateString: string) => (e: any) => {
    console.log('fart');
    console.log(date, dateString);
  }
  
  public put = (id: any, date: any) => (e: any) => {
    console.log(id, date);
    fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members/' + id, { 
      body: JSON.stringify({
        membershipExpiration: date,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT', 
      mode: 'cors',
    })
      .then(results => {
        console.log("results: ", results);
        return results.json();
      }).then(data => {
        console.log("data: ", data);
        const userInfo = data;
        this.setState({ users: userInfo })
      }).catch(err => {
        console.log(err);
      })
  }

  public dateCheck = (date: string) => {
    let out = ''
    const expDate = new Date(date);
    const now = new Date(Date.now());
    
    if (expDate > now) {
      out = 'Active'
    } else if (expDate <= now) {
      out = 'Inactive'
    } else {
      out = 'Invalid'
    }
    return out
  }
  
  public delete =(id: any) => (e: any) => {
    console.log(id)
    fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members/'+id, {method: 'DELETE'})
      .then(results => {
        console.log(results);
        return results.json();
      }).then(data => {
        console.log(data);
        const userInfo = data
        this.setState({users: userInfo})
      }).catch(err => {
        console.log('err: ', err);
      })
  }

  

  // public componentDidMount() {
  //   fetch('http://5ca5aef2ddab6d0014bc85c0.mockapi.io/members')
  //     .then(results => {
  //       console.log(results)
  //       return results.json();
  //     }).then(data => {
  //       const userInfo = data
  //       this.setState({ users: userInfo })
  //     })
  // }

  public logParam = (name: any) => (e: any) => console.log(name);
  public printUsers = () => console.log(this.props.visible_array);

  public render(): JSX.Element {
    return (  
      <div>
        <Table columns={this.col} dataSource={this.props.n_test} pagination={{ defaultPageSize: 100 }} rowKey='uid'/>
      </div>
    );
  }
}

export default MemberTable as any;


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