import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Vendor from './components/Vendor';
import ListUsers from './components/UserManagement/ListUsers/ListUsers';
import AddUser from './components/UserManagement/AddUser/AddUser';
import Header from './components/Shared/Header/Header';
import SideNav from './components/Shared/SideNav/SideNav'
import { Container, Col , Row} from 'reactstrap';
import AddProject from './components/AddProject/AddProject';


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
  <div className="h-100">
    <Row>
      <Col className="p-0">
        <div className="Header header p-0">
              <Header></Header>
          </div>  
      </Col>
      </Row>
      <Row className="h-100">
        <SideNav/>
        <Col>
          {props.children}
        </Col>        
      </Row>
  </div>
);

function App() {
  return (
  <>
       <Container fluid className="h-100">
          <Switch>
              <Layout exact path='/' layout={LoginLayout} component={Login}/>
              <Layout exact path='/home' layout={DefaultLayout}  component={Home}/>

              <Layout exact path='/addproject' layout={DefaultLayout}  component={AddProject}/>
              <Layout exact path='/vendor' layout={DefaultLayout}  component={Vendor}/>
              <Layout exact path='/user' layout={DefaultLayout}  component={ListUsers}/>
              <Layout exact path='/adduser' layout={DefaultLayout}  component={AddUser}/>
          </Switch>
      </Container>
    </>
  );
}

export default App;
