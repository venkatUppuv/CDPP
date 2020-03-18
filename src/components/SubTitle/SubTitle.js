import React, { Component } from 'react'
import { Button, Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import './SubTitle.scss';


export default class SubTitle extends Component {
    
    render() {
        return (
            <>
            <Row className='Projects mt-4'>
                <Col><h2>{this.props.title}s</h2></Col>
                <Col>
                    <div className='btn float-right'><Button color="primary border-0" style={{background:'#E84924'}}>
                       <a href={"/add"+this.props.title} color='light'>+ Add {this.props.title}</a></Button>
                    </div>
                </Col>
            </Row>
            <Row>    
                <Col>
                    <Breadcrumb className="bdcrumb">                    
                        {this.props.breadcrumb.map((breadcrumb, id) =>
                            <BreadcrumbItem><a href="#">{breadcrumb}</a></BreadcrumbItem>
                        )}
                    </Breadcrumb>
                </Col>              
            </Row>
            </>
        )
    }

}
