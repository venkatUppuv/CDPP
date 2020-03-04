import React from 'react'
import logo from '../innominds.jpeg'

export default function Header() {
    return (
        < >
            <div className='Logo'><img src = {logo} alt = 'logo' /></div>
            <div className='Cdpp'>CDPP</div>
            <div className='UserImg'><i class="fa fa-user-circle-o" aria-hidden="true" fa-8x></i>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </>
    )
}
