import React, { Component } from 'react'
import Header from '../Shared/Header/Header'
import AddProject from '../AddProject/AddProject'
import SideNav from '../Shared/SideNav/SideNav'
import PropTypes from 'prop-types'


export class PageLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <div>
            <div className="wrapper">
                <div className="header p-0">
                <Header/>
                </div>
                
                <div>
                    <SideNav/>
                </div>
               <div className="footer">
                    {/* footer */}
                </div>
            </div>
        </div>
      )
   }

 }

 PageLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default PageLayout
