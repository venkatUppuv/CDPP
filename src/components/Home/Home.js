import React, { Component } from 'react'
import AddProject from '../AddProject/AddProject'
import GridComp from '../../components/Grid/Grid'
import './Home.scss'


export default class Home extends Component {
    constructor(){
        super();
        this.state={
            toggle:true,
            subtitle:"Projects"

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
                   <AddProject title={this.state.subtitle}/>
                   <GridComp />
                </div>
            </div>
        )
    }
}
