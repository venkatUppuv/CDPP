import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideNav extends Component {

    render() {
        return (
            <div className='SideNav'>
                <div className='Hamburg ' onClick={this.props.onToggle}><i class="fa fa-list" aria-hidden="true"></i></div>
                <div>
                    <Link to='/home/projects'>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{this.props.toggle && 'Projects'}
                    </Link>
                </div>
                <div><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;{this.props.toggle && 'Vendors'}</div>
                <div><i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.toggle && 'User Managment'}</div>
            </div>
        )
    }
}
