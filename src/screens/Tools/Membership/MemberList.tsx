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
  key: 'name.first',
  title: 'Name',
}, {
  dataIndex: 'email',
  key: 'email',
  title: 'Email',
}, {
  dataIndex: 'cell',
  key: 'e',
  title: 'E',
}];

class MemberList extends React.Component<IMemberListProps, {}> {

  public log = () => console.log(this.props.stateFromParent.users);



  public render(): JSX.Element {
    return (
      <div>
        <Button onClick={this.log} type="primary">out pic info</Button>
        {/* <table style={f}>

          // TODO: for loop will have to go here to insert entries from IAccountProps
          <tbody>
            <tr>
              <th><b>Name</b></th>
              <th><b>Email</b></th>
              <th><b>Status</b></th>
            </tr>

          
            {this.props.stateFromParent.users.map((item: any) => {
              return (
                // <h1>Nathan</h1>  

                <div key="">{item}</div>  
                
              );
            })}

         
          </tbody>
        </table> */}

        <Table columns={col} dataSource={this.props.stateFromParent.users} />

      </div>
    );
  }
}

export default MemberList as any;



/* this is essentially a for-each loop */

/*
{this.props.stateFromParent.data.map((item: any) => {
  return(
    <div key= { item.id }>
      <img src={item.medium} />
      // there have to be keys when using for loops or it'll freak -> needs a specific instantiation 
      <tr>
        <th>{ item }</th>
        <th>{ item }</th>
        <th>{ item }</th>
      </tr> 
      { item }
    </div>
  );
})}

*/