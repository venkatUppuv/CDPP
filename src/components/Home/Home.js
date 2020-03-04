import React, { Component } from 'react'
import Header from '../Shared/Header/Header'
import AddProject from '../AddProject/AddProject'
import SideNav from '../Shared/SideNav/SideNav'
import GridComp from '../GridComp'
import './Home.scss'


export default class Home extends Component {
    constructor(){
        super();
        this.state={
            toggle:true
        }
    }
    
    onToggle = ()=>{
        console.log('called..')
        this.setState({toggle:!this.state.toggle})
    }

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                  <Header/>
                </div>
                
                <div className={this.state.toggle ? "Sidenav":"Toggle"}>
                    <SideNav onToggle = {this.onToggle} toggle={this.state.toggle}/>
                </div>
                <div className="ProjectHeading">
                   <AddProject/>
                   <GridComp />
                </div>
                <div className="footer">
                    {/* footer */}
                </div>
            </div>
        )
    }
}
