import React, { Component, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './AddUser.scss';
import classnames from 'classnames';
import SubTitle from '../../SubTitle/SubTitle';


export default class AddUser extends Component {
    constructor(){
        super();
        this.state = {
            subtitle: "User",
            breadcrumb: [
                "Dashboard",
                "Users",
                "Create New User"
            ]
        }
    }
    render() {
          return (
            <div>
            <SubTitle title={this.state.subtitle} breadcrumb={this.state.breadcrumb}/>
                <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: true })}>
                    User Details
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: false})}>
                    Add Roles
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Create User</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
            
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            </div>
            
        )
    }

}
