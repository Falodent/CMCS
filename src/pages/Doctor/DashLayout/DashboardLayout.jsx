import React from 'react'
import "./DashboardLayout.css"
import DocSidebar from "../Sidebar/Sidebar"

const DocDashboardLayout = ({state, children}) => {
  return (
    <div className='layout'>
        <DocSidebar state={state}/>
        <div className='dash-body'>
            {children}
        </div>
    </div>
  )
}

export default DocDashboardLayout