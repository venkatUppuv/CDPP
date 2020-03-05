import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../../../assets/images/hamburger.svg'
import vendor from '../../../assets/images/vendor.svg'
import project from '../../../assets/images/project.svg'
import user from '../../../assets/images/user.svg'
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
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen : !this.state.isOpen
        });

    }
  
    render() {

        return (
            <div className='SideNav'>
                <div className='Hamburg ' onClick={this.props.onToggle}>
                    <img src={hamburger}/>
                </div>
                <div className="linkItem">
                    <Link to='/home/projects'>
                        <img src={project} alt="Projects" className="mr-2"/>
                        <span>{this.props.toggle && 'Projects'}</span>
                    </Link>
                    <NavbarToggler onClick={this.toggle}  className="mr-2 pull-right">
                    { this.state.isOpen?   
                        <i className="fa fa-caret-up"></i>:
                        <i className="fa fa-caret-down"></i>
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
                        <span>{this.props.toggle && 'Vendors'}</span>
                </div>
                <div className="linkItem">
                        <img src={user} alt="Users" className="mr-2"/>
                        <span>{this.props.toggle && 'User Managment'}</span>
                </div>
            </div>
        )
    }
}
