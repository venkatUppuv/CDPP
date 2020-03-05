import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../../../assets/images/hamburger.svg'
import vendor from '../../../assets/images/vendor.svg'
import project from '../../../assets/images/project.svg'
import user from '../../../assets/images/user.svg'
import './SideNav.scss';

export default class SideNav extends Component {

    render() {
        return (
            <div className='SideNav'>
                <div className='Hamburg ' onClick={this.props.onToggle}>
                    <img src={hamburger}/>
                </div>
                <div className="linkItem">
                    <Link to='/home/projects'>
                        <img src={project} alt="Projects" className="mr-2"/>
                        <span>{this.props.toggle && 'Projects'}</span>
                    </Link>
                </div>
                <div className="linkItem">
                        <img src={vendor} alt="Vendor" className="mr-2"/>
                        <span>{this.props.toggle && 'Vendors'}</span>
                </div>
                <div className="linkItem">
                        <img src={user} alt="Users" className="mr-2"/>
                        <span>{this.props.toggle && 'User Managment'}</span>
                </div>
            </div>
        )
    }
}
