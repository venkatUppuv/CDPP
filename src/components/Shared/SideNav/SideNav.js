import React, { Component, useState } from 'react'
import hamburger from '../../../assets/images/hamburger.svg'
import vendor from '../../../assets/images/vendor.svg'
import project from '../../../assets/images/project.svg'
import user from '../../../assets/images/user.svg'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ProjectSidenav from '../../../components/ProjectSidenav';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import './SideNav.scss';

export default class SideNav extends Component {
    constructor(){

        super();

        this.state = {
            isOpen: true,
            toggle:true,
            subtitle:"Projects"
            
        }
    }

    toggle = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });

    }
   
    onToggle = ()=>{
        console.log('called..')
        this.setState({
            toggle : !this.state.toggle
        })
    }


  
    render() {
        const { match } = this.props
        return (
           <div  className={this.state.toggle ? "SideMenu":"Toggle"}>
            <div className='SideNav'   toggle={this.state.toggle}>
                <div className='Hamburg ' onClick={this.onToggle}>
                    <img src={hamburger}/>{this.state.toggle}
                </div>
                <div className="linkItem">
                    <Link to='/home/projects'>
                        <img src={project} alt="Projects" className="mr-2"/>
                        <span>{'Projects'}</span>
                    </Link>
                    <NavbarToggler onClick={this.toggle}  className="mr-2 pull-right p-0">
                    { this.state.isOpen?   
                        <i className="fa fa-caret-down"></i>:
                        <i className="fa fa-caret-up"></i>
                    }
                    </NavbarToggler>
                    <Collapse isOpen={!this.state.isOpen}>
                        <Nav navbar className="col">
                          <NavItem>
                            <NavLink href="/Projectexpences/">Manage Expences</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="/Projectservice/">Manage Services</NavLink>
                          </NavItem>
                        </Nav>
                      </Collapse>
                </div>
                <div className="linkItem">
                        <img src={vendor} alt="Vendor" className="mr-2"/>
                        <span>{'Vendors'}</span>
                </div>
                <div className="linkItem">
                        <img src={user} alt="Users" className="mr-2"/>
                        <span>{'User Managment'}</span>
                </div>
            </div>
            </div>
            )
    }
}
