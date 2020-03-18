import React, { Component } from 'react'
import SubTitle from '../SubTitle/SubTitle'
import GridComp from '../../components/Grid/Grid'
import './Home.scss'


export default class Home extends Component {
    constructor(){
        super();
        this.state={
            toggle:true,
            title:"Project",
            breadcrumb: [
                "Dashboard",
                "Projects"
            ],
            data: [
                {
                
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
    
    onToggle = ()=>{
        console.log('called..')
        this.setState({toggle:!this.state.toggle
        })
    }

    render() {
        return (
            <div>
                <div className="ProjectHeading">
                   <SubTitle {...this.state} />
                   <GridComp {...this.state.data} />
                </div>
            </div>
        )
    }
}
