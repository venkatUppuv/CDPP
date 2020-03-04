import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ProjectSidenav from './components/ProjectSidenav';
import Vendor from './components/Vendor';
import UserManagement from './components/UserManagement';


function App() {
  return (
    // <div className="App" style={{ margin: '0px 10px' }}>
    <>
      <div className='Container'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/home/projects' component={ProjectSidenav} />
          <Route exact path='/home/vendor' component={Vendor} />
          <Route exact path='/home/userManagement' component={UserManagement} />
        </Switch>
      </div>
    </>
    // </div>
  );
}

export default App;
