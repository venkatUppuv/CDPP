import React, { Component, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './AddProject.scss';
import classnames from 'classnames';


export default class AddPoject extends Component {
    render() {
          return (
            <div className='Projects'>
                <Row>
                <Col className="p-0">
                  <h2>Add Project</h2>
                </Col>
                </Row>
                <Row>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Projects</a></BreadcrumbItem>
                    <BreadcrumbItem active>Add New Project</BreadcrumbItem>
                </Breadcrumb>
                </Row>
        

                <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: true })}
                  
                  >
                    Project Details
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: false})}
                   
                  >
                    Team Members
                  </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                  className={classnames({ active: false})}
                 
                >
                  Project Expence
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                className={classnames({ active: false})}
               
              >
                Vedor Details
              </NavLink>
            </NavItem>
              </Nav>
              <TabContent>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
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
