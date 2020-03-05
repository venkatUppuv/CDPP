import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import logo from '../../assets/images/logo.jpg';
import { Button } from 'reactstrap';
import './Login.scss';

export default class Login extends Component {
    render() {
        return (
            <div className='Login'>

                <div className='Credentials'>

                    <div className='logo'>
                        <img src={logo} alt='logo' />
                        <p>engineering innovation</p>
                    </div>

                    <div className='InputFields'>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>User Name</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Password&nbsp;&nbsp;&nbsp;</InputGroupText>
                            </InputGroupAddon>
                            <Input />
                        </InputGroup>
                        <br />
                        <Link to='/home'>
                            <Button color="primary">Login</Button>
                        </Link>
                    </div>

                </div>

                <div className='LoginImage'>
                    {/* <img src={Loginbanner} alt='Loginimage' /> */}
                </div>
               
            </div>
        )
    }
}
