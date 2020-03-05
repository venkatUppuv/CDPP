import React from 'react'
import logo from '../../../assets/images/headerLogo.svg'
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
import './Header.scss'

export default function Header() {
    return (
        < >
        <Navbar color="transparent" light expand="md" className="p-0">
                <NavbarBrand href="/">
                    <div className='Logo'>
                        <img src = {logo} alt = 'logo' />
                    </div>
                </NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink href="/home/">
                    <div className='Cdpp alert-heading pl-3'>CDPP</div>
                </NavLink>
                </NavItem>
            </Nav>
            <NavbarText>
                <div className='UserImg'>
                    <i className="fa fa-user-circle-o fa-8x mr-1" aria-hidden="true"></i>
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                </div>
            </NavbarText>
            </Collapse>
        </Navbar>         
           
           
    
        </>
    )
}
