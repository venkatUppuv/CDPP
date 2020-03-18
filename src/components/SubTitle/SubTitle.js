import React, { Component } from 'react'
import { Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './SubTitle.scss';


export default class SubTitle extends Component {
    
    render() {
        return (
            <div className='Projects'>
                <div className="TitleName"><h2>{this.props.title}</h2></div>
                <div className='btn'><Button color="primary border-0" style={{background:'#E84924'}}><a href="/project" color=
                'light'>+ Add Project</a></Button></div>
                <Breadcrumb>                    
                    {this.props.breadcrumb.map((breadcrumb, id) =>
                        <BreadcrumbItem><a href="#">{breadcrumb}</a></BreadcrumbItem>
                    )}
                </Breadcrumb>
            </div>
        )
    }

}
