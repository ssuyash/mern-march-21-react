//interface props
import React from 'react'
const layoutContext = React.createContext({
    isSideBarOpen : true,
    setIsSideBarOpen:null,
    selectedNavMenu:"dashboard",
    setSelectedNavMenu:null,
    isLoadingLayout:false,
})


export default layoutContext