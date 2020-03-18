import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import "./vendor-list.style.scss";


class VendorList extends Component {

    constructor() {
        super();

        this.state = {
            toggle:true,
            List : [
                {
                    'id':1,
                    'vendorName':'Stark',
                    'vendorKey': 123
                },
                {
                    'id':2,
                    'vendorName':'Lannister',
                    'vendorKey': 123
                },
                {
                    'id':3,
                    'vendorName':'Targaryen',
                    'vendorKey': 123
                },
                {
                    'id':4,
                    'vendorName':'Baratheon',
                    'vendorKey': 123
                },
                {
                    'id':5,
                    'vendorName':'Tully',
                    'vendorKey': 123
                },
                {
                    'id':6,
                    'vendorName':'Greyjoy',
                    'vendorKey': 123
                },
                {
                    'id':7,
                    'vendorName':'Tyrell',
                    'vendorKey': 123
                },
                {
                    'id':8,
                    'vendorName':'Martell',
                    'vendorKey': 123
                }
            ]
        }
    }

    onToggle = ()=>{
        console.log('called..')
        this.setState({toggle:!this.state.toggle})
    }

    render() {
        let keys = Object.keys(this.state.List[0])
        return(
            <div className='vendors'>
                <h2 className='title'>Vendors List</h2>
                <div>
                    <Table responsive size="lr">
                        <thead>
                            <tr>
                                {keys.map((e,idx) => <th key={idx}>{e}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.List.map((user,id) =>
                                <tr key={id}>
                                {keys.map((e, id) =>
                                    <td key={id}>{user[e]}</td>
                                )}
                                </tr>
                                )}
                        </tbody>
                    </Table>
                </div>
            </div>
            )
    }

}

export default VendorList;
