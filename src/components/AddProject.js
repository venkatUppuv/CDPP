import React from 'react'
import { Button } from 'reactstrap';


export default function AddProject() {
    return (
        <div className='Projects'>
            <div><h2>Projects</h2></div>
            <div className='btn'><Button color="primary" style={{background:'#E84924'}}>+ Add Project</Button></div>
        </div>
    )
}
