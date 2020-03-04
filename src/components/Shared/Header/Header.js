import React from 'react'
import logo from '../../../assets/images/innominds.jpeg'
import './Header.scss'

export default function Header() {
    return (
        < >
            <div className='Logo'><img src = {logo} alt = 'logo' /></div>
            <div className='Cdpp'>CDPP</div>
            <div className='UserImg'><i className="fa fa-user-circle-o fa-8x" aria-hidden="true"></i>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </>
    )
}
