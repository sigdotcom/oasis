import { Button } from 'antd';
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

class MemberList extends React.Component<IMemberListProps, {}> {
// class MemberList extends React.Component {
    public log = () => console.log(this.props.stateFromParent.data);

    // public handleLangChange = () => {
    //     let lang = "fart";
    //     this.props;
    // };

    
    public render(): JSX.Element {
        return (
            <div>
                <Button onClick={this.log} type="primary">out pic info</Button>
                <table>
                    {/* <thead style={tableHead}>
                        
                    </thead> */}

                    {/* TODO: for loop will have to go here to insert entries from IAccountProps */}
                    <tbody>
                        <tr>
                            <th><b>Name</b></th>
                            <th><b>Email</b></th>
                            <th><b>Status</b></th>
                        </tr>
                        {/* this is essentially a for-each loop */}
                        {this.props.stateFromParent.pictures.map((item: any) => {
                            return(
                                <div key= { item.id }>
                                    {/* <img src={item.medium} /> */}
                                    {/* // there have to be keys when using for loops or it'll freak -> needs a specific instantiation */}
                                    {/* <tr>
                                        <th>{ item }</th>
                                        <th>{ item }</th>
                                        <th>{ item }</th>
                                    </tr> */}
                                    { item }
                                </div>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MemberList as any;


/*
const Resourcer = require('redux-rest-resource');
// import Resourcer = require('redux-rest-resource');

export const {types, actions, rootReducer} = Resourcer.createResource({
    name: 'member',
    url: 'http(s)://5ca5aef2ddab6d0014bc85c0.mockapi.io/:id',
});
*/

