import React, { Component } from 'react'
import SubTitle from '../SubTitle/SubTitle'
import GridComp from '../../components/Grid/Grid'
import './Home.scss'


export default class Home extends Component {
    constructor(){
        super();
        this.state={
            toggle:true,
            subtitle:"Projects",
            breadcrumb: [
                "Dashboard",
                "Projects"
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
                   <SubTitle title={this.state.subtitle} breadcrumb={this.state.breadcrumb}/>
                   <GridComp />
                </div>
            </div>
        )
    }
}
