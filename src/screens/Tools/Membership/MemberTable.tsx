import { DatePicker } from 'antd';
import { Divider, Table } from 'antd';
import { Input } from 'antd'
// import { Button, Popover } from 'antd';
import * as moment from 'moment';
import * as React from 'react';

interface IMemberTableProps {
  usersProps: any,
  delete: any,
  put: any,
}

interface IMemberTableState {
  users: any,
}

const dateFormat = 'MM/DD/YYYY';

class MemberTable extends React.Component<IMemberTableProps, IMemberTableState> {
  public inputDate = Input.Search;
  public input = Input;

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
    title: 'Status',
  }, {
    key: 'action',
    render: (record: any) => (
      <span>
{/*   // this is new stuff
        <this.inputDate
          placeholder="MM/DD/YYYY"
          onSearch={this.changeDate}
          style={{ width: 150 }}
        />

        <a onClick={this.put(record.id, record, "2020-04-07T08:24:01.378Z")}>Edit Date</a>
        <Divider type="vertical" />
        <a onClick={this.delete(record.id)}>Delete</a> */}


        {/* this is old stuff */}
        <DatePicker defaultValue={moment(new Date(Date.now()), dateFormat)} format={dateFormat} />
        <a onClick={this.props.put(record.id, "2020-04-07T08:24:01.378Z")}>Edit</a>
        <Divider type="vertical" />
        <a onClick={this.props.delete(record.id)}>Delete</a>
      </span>
    ),
    title: 'Action',
  }];

  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
    }
  }

  public componentWillReceiveProps(nextProps: any) {
    if (nextProps.value !== this.props.usersProps) {
      this.setState({ users: nextProps.usersProps });
    }
  }

  public dateCheck(date: string) {
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
    
  public logParam = (name: any) => (e: any) => console.log(name);
  public printUsers() {
    console.log(this.props.usersProps);
  }

  public render(): JSX.Element {
    return (  
      <div>
        <Table columns={this.col} dataSource={this.props.usersProps} pagination={{ defaultPageSize: 100 }} rowKey='uid' />
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