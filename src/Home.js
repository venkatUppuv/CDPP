import React, { Component } from 'react'
import Header from './components/Header'
import AddProject from './components/AddProject'
import SideNav from './components/SideNav'
import GridComp from './components/GridComp'


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
                
                <div className={this.state.toggle ?"Sidenav":"Toggle"}>
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
