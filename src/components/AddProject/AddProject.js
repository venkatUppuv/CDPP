import React from 'react'
import { Button } from 'reactstrap';
import './AddProject.scss';


export default function AddProject() {
    return (
        <div className='Projects mt-3'>
            <div><h2>Projects</h2></div>
            <div className='btn'><Button color="primary border-0" style={{background:'#E84924'}}>+ Add Project</Button></div>
        </div>
    )
}
