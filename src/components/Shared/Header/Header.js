import React, { Component , useState} from 'react'
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
    NavbarText,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
import './Header.scss'

export default function Header() {

        const [dropdownOpen, setDropdownOpen] = useState(false);
        const toggle = () => setDropdownOpen(prevState => !prevState);
       const logout = () => {
            alert("logout");
        }
        return (
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
                <Dropdown  className='UserImg' isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="light">
                        <i className="fa fa-user-circle-o fa-8x mr-1" aria-hidden="true"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={logout}>Log Out</DropdownItem>
                    </DropdownMenu>
              </Dropdown>
            </NavbarText>
            </Collapse>
        </Navbar>         
        )
}
