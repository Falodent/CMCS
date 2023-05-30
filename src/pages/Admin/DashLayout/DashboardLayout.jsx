import React from 'react'
import "./DashboardLayout.css"
import AdSidebar from "../Sidebar/Sidebar"

const AdDashboardLayout = ({state, children}) => {
  return (
    <div className='layout'>
        <AdSidebar state={state}/>
        <div className='dash-body'>
            {children}
        </div>
    </div>
  )
}

export default AdDashboardLayout