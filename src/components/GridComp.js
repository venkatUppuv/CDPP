import React, { Component } from 'react'
import { Table } from 'reactstrap';
import GridDisp from './GridDisp';

export default class GridComp extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id": 1,
                    "customer": 'ALSKSklD',
                    "project": 'CDPP_Inno',
                    "projectManager": "Inno",
                    "vendorName": 'Innominds',
                    "vendorKey": "Az",
                    "startDate": 'DD/MM/YYYY',
                    "endDate": 'DD/MM/YYYY',
                    "email": 'acbdxyz@inno.com',
                    "status": 'not available',
                    
                },
                {
                    "id": 2,
                    "customer": 'ALSKSklD',
                    "project": 'CDPP_Inno',
                    "projectManager": "Inno",
                    "vendorName": 'Innominds',
                    "vendorKey": "Az",
                    "startDate": 'DD/MM/YYYY',
                    "endDate": 'DD/MM/YYYY',
                    "email": 'acbdxyz@inno.com',
                    "status": 'not available',
                    
                },
                {
                    "id": 3,
                    "customer": 'ALSKSklD',
                    "project": 'CDPP_Inno',
                    "projectManager": "Inno",
                    "vendorName": 'Innominds',
                    "vendorKey": "Az",
                    "startDate": 'DD/MM/YYYY',
                    "endDate": 'DD/MM/YYYY',
                    "email": 'acbdxyz@inno.com',
                    "status": 'not available',
                    
                },
                {
                    "id": 4,
                    "customer": 'ALSKSklD',
                    "project": 'CDPP_Inno',
                    "projectManager": "Inno",
                    "vendorName": 'Innominds',
                    "vendorKey": "Az",
                    "startDate": 'DD/MM/YYYY',
                    "endDate": 'DD/MM/YYYY',
                    "email": 'acbdxyz@inno.com',
                    "status": 'not available',
                    
                },
                {
                    "id": 5,
                    "customer": 'ALSKSklD',
                    "project": 'CDPP_Inno',
                    "projectManager": "Inno",
                    "vendorName": 'Innominds',
                    "vendorKey": "Az",
                    "startDate": 'DD/MM/YYYY',
                    "endDate": 'DD/MM/YYYY',
                    "email": 'acbdxyz@inno.com',
                    "status": 'not available',
                    
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
                    <Table striped>
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
