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
            password:'',
            usernameError:'',
            passwordError:'',
            formError:''
        }
    }
    handleChange = (e) => {
       // this.validate();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validate  = () => {
        let usernameError="", passwordError ="";
        if(!this.state.username){
           usernameError = "Username cannot be empty"
        }
        if(!this.state.password ){
            passwordError= "Password cannot be empty"
        }
        if(usernameError || passwordError){
            this.setState({ usernameError, passwordError });
            return false;
        }
        return true;
    }
    onSubmit = (e) => {
        e.preventDefault();
        const formValid = this.validate();
        if(formValid){
            let url = 'http://localhost:8082/login?username='+this.state.username+'&password='+this.state.password;
            axios.post(url).then((result) => {
                this.props.history.push('/home');
                axios.defaults.headers.common['Authorization'] = `Bearer ${result.accessToken}` 
            }).catch((err) => {
                this.setState({ formError: err});
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
                    <div className="text-danger">{this.state.formError}</div>
                    <FormGroup>
                      <Label for="username">Username</Label>
                      <Input type="username" name="username" id="username" value={this.state.username}
                      onChange={e => this.handleChange(e)} className={this.state.usernameError?'is-invalid':'form-control'}/>
                      <div className="text-danger">{this.state.usernameError}</div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input type="password" name="password" id="password" value={this.state.password}
                      onChange={e => this.handleChange(e)} className={this.state.passwordError?'is-invalid':'fonr-control'}/>
                      <div className="text-danger">{this.state.passwordError}</div>
                    </FormGroup>
                    <Button className="btn btn-primary" onClick={this.onSubmit}>Login</Button>
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
