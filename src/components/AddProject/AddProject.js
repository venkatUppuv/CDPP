import React, { Component } from 'react'
import { Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './AddProject.scss';


export default class AddProject extends Component {
    render() {
        return (
            <div className='Projects'>
                <div><h2>{this.props.title}</h2></div>
                <div className='btn'><Button color="primary border-0" style={{background:'#E84924'}}><a href="/addproject" color=
                'light'>+ Add Project</a></Button></div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Projects</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }

}
