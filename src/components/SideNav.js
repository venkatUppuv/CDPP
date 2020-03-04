import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideNav.scss';

export default class SideNav extends Component {

    render() {
        return (
            <div className='SideNav'>
                <div className='Hamburg ' onClick={this.props.onToggle}><i class="fa fa-list" aria-hidden="true"></i></div>
                <div class="linkItem">
                    <Link to='/home/projects'>
                        <i class="fa fa-briefcase" aria-hidden="true"></i><span>{this.props.toggle && 'Projects'}</span>
                    </Link>
                </div>
                <div class="linkItem"><i class="fa fa-user" aria-hidden="true"></i><span>{this.props.toggle && 'Vendors'}</span></div>
                <div class="linkItem"><i class="fa fa-users" aria-hidden="true"></i><span>{this.props.toggle && 'User Managment'}</span></div>
            </div>
        )
    }
}
