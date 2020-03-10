import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ProjectSidenav from './components/ProjectSidenav';
import {PageLayout} from './components/Layout/PageLayout';
import Vendor from './components/Vendor';
import UserManagement from './components/UserManagement';
import Header from './components/Shared/Header/Header';
import SideNav from './components/Shared/SideNav/SideNav'
import { Container, Col , Row} from 'reactstrap';

const Layout = ({component: Component,layout: Layout,  ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )
};

const LoginLayout = props => (
  <Container fluid>
    {props.children}
  </Container>
)


const DefaultLayout = (props) => (
  <div>
    <Row>
      <Col className="p-0">
        <div className="Header header p-0">
              <Header></Header>
          </div>  
      </Col>
      </Row>
      <Row>
          <Col xs="2" className="p-0">
            <SideNav/>
          </Col>
          <Col xs="10"  className="p-0">
              {props.children}
          </Col>
      </Row>
  </div>
);

function App() {
  return (
  <div>
       <Container fluid>
          <Switch>
              <Layout exact path='/' layout={LoginLayout} component={Login}/>
              <Layout exact path='/home' layout={DefaultLayout}  component={Home}/>
              <Layout exact path='/vendor' layout={DefaultLayout}  component={Vendor}/>
              <Layout exact path='/user' layout={DefaultLayout}  component={UserManagement}/>
          </Switch>
      </Container>
    </div>
  );
}

export default App;
