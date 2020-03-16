import React, { Component } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { InputGroup, InputGroupText, InputGroupAddon, Input, Form, FormGroup, Label } from 'reactstrap';
import logo from '../../assets/images/logo.jpg';
import { Button } from 'reactstrap';
import axios from 'axios';
import './Login.scss';

class Login extends Component {

    componentDidMount(){
       // axios.post();
    }
   

    constructor(){
        super();
        this.state = {
            username: '',
            password:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.username !== null && this.state.password !== null){
            let url = 'http://localhost:8082/login?username='+this.state.username+'&password='+this.state.password;
            axios.post(url).then((result) => {
                this.props.history.push('/home');
                axios.defaults.headers.common['Authorization'] = `Bearer ${result.accessToken}` 
            });
        }  
     }
 
    render() {
        return (
            <div className='Login'>

                <div className='Credentials'>

                    <div className='logo'>
                        <img src={logo} alt='logo' />
                        <p>engineering innovation</p>
                    </div>

                    <Form  className='InputFields'>
                    <FormGroup>
                      <Label for="username">Username</Label>
                      <Input type="username" name="username" id="username" placeholder="username"   value={this.state.username}
                      onChange={e => this.handleChange(e)}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input type="password" name="password" id="password" placeholder="password"   value={this.state.password}
                      onChange={e => this.handleChange(e)}/>
                    </FormGroup>
                    <Button onClick={this.onSubmit}>Submit</Button>
                    </Form>
                </div>

                <div className='LoginImage'>
                    {/* <img src={Loginbanner} alt='Loginimage' /> */}
                </div>
               
            </div>
        )
    }
}

export default withRouter(Login)
