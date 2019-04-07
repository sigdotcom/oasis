import { Button } from 'antd';
import { Table } from 'antd';
import * as React from 'react';

interface IMemberListProps {
    stateFromParent: any,
}

// const tableHead = {
//     color: "green"
// }
// const tableBody = {
//     color: "blue"
// }
// const f = {
//   width: "100%"
// }

const col = [{
  dataIndex: 'name.first',
  key: 'firstName',
  title: 'Name',
}, {
  dataIndex: 'email',
  key: 'email',
  title: 'Email',
}, {
  dataIndex: 'cell',
  key: 'e',
  title: 'Cell',
}];

class MemberList extends React.Component<IMemberListProps, {}> {

  public log = () => console.log(this.props.stateFromParent.users);


  public render(): JSX.Element {
    return (
      <div>
        <Button onClick={this.log} type="primary">out pic info</Button>
        <Table columns={col} dataSource={this.props.stateFromParent.users} />

      </div>
    );
  }
}

export default MemberList as any;

