import React, { Component } from 'react'
import { Table } from 'reactstrap';
import GridDisp from '../GridDisp';
import './Grid.scss';

export default class GridComp extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "Id": 1,
                    "Customer": 'ALSKSklD',
                    "Project": 'CDPP_Inno',
                    "ProjectManager": "Inno",
                    "VendorName": 'Innominds',
                    "VendorKey": "Az",
                    "StartDate": 'DD/MM/YYYY',
                    "EndDate": 'DD/MM/YYYY',
                    "Email": 'acbdxyz@inno.com',
                    "Status": 'not available',
                    
                },
                {
                    "Id": 2,
                    "Customer": 'ALSKSklD',
                    "Project": 'CDPP_Inno',
                    "ProjectManager": "Inno",
                    "VendorName": 'Innominds',
                    "VendorKey": "Az",
                    "StartDate": 'DD/MM/YYYY',
                    "EndDate": 'DD/MM/YYYY',
                    "Email": 'acbdxyz@inno.com',
                    "Status": 'not available',
                    
                },
                {
                    "Id": 3,
                    "Customer": 'ALSKSklD',
                    "Project": 'CDPP_Inno',
                    "ProjectManager": "Inno",
                    "VendorName": 'Innominds',
                    "VendorKey": "Az",
                    "StartDate": 'DD/MM/YYYY',
                    "EndDate": 'DD/MM/YYYY',
                    "Email": 'acbdxyz@inno.com',
                    "Status": 'not available',
                    
                },
                {
                    "Id": 4,
                    "Customer": 'ALSKSklD',
                    "Project": 'CDPP_Inno',
                    "ProjectManager": "Inno",
                    "VendorName": 'Innominds',
                    "VendorKey": "Az",
                    "StartDate": 'DD/MM/YYYY',
                    "EndDate": 'DD/MM/YYYY',
                    "Email": 'acbdxyz@inno.com',
                    "Status": 'not available',
                    
                },
                {
                    "Id": 5,
                    "Customer": 'ALSKSklD',
                    "Project": 'CDPP_Inno',
                    "ProjectManager": "Inno",
                    "VendorName": 'Innominds',
                    "VendorKey": "Az",
                    "StartDate": 'DD/MM/YYYY',
                    "EndDate": 'DD/MM/YYYY',
                    "Email": 'acbdxyz@inno.com',
                    "Status": 'not available',
                    
                },

            ]
        }
    }
    render() {
        // console.log(this.state.data)
        let keys = Object.keys(this.state.data[0])
        console.log(keys)
        return (
            <div className='GridComp'>

                <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                {keys.map((e, idx) => <th>{e}</th>
                                )}
                            </tr>
                        </thead>
                        {this.state.data.map((user, id) =>
                            <tbody key={id}>
                                <tr>
                                    {keys.map((e, id) =>
                                        <td>{user[e]}</td>
                                    )}
                                </tr>
                            </tbody>
                        )}
                    </Table>
                </div>

            </div>
        )
    }
}
