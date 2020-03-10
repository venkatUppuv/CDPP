import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './AddProject.scss';


export default class AddProject extends Component {
    render() {
        return (
            <div className='Projects'>
                <div><h2>{this.props.title}</h2></div>
                <div className='btn'><Button color="primary border-0" style={{background:'#E84924'}}><a href="/addproject">+ Add Project</a></Button></div>
            </div>
        )
    }

}
