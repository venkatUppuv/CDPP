import React, { Component, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './ListUsers.scss';
import classnames from 'classnames';
import SubTitle from '../../SubTitle/SubTitle';
import GridComp from '../../Grid/Grid';


export default class ListUsers extends Component {
    constructor(){
        super();
        this.state = {
            subtitle: "User",
            breadcrumb: [
                "Dashboard",
                "Users"
            ]
        }
    }
    render() {
          return (
            <div>
              <SubTitle title={this.state.subtitle} breadcrumb={this.state.breadcrumb}/>
              <GridComp/>
            </div>
            
        )
    }

}
