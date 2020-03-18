import React, { Component } from 'react'
import { Table } from 'reactstrap';
import './Grid.scss';

const GridComp = (data) => {
    
    const keys = Object.keys(data[0]);
    const collection = Object.values(data);
        return (
            <div className='GridComp'>

                <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                {keys.map((e, idx) => <th key={idx}>{e}</th>
                                )}
                            </tr>
                        </thead>
                        {collection.map((user, id) =>
                            <tbody key={id}>
                                <tr>
                                    {keys.map((e, id) =>
                                        <td key={id}>{user[e]}</td>
                                    )}
                                </tr>
                            </tbody>
                        )}
                    </Table>
                </div>

            </div>
        )
    }

    export default GridComp;

