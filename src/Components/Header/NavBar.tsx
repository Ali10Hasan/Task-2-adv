import React from 'react'
import TopBar from './TopBar'
import NavMenu from './NavMenu'

const NavBar = () => {
  return (
    <div>
        <TopBar Text="Admission is Open, Grab your seat now" icon='/Arrow.png'/>
        <NavMenu logo='/Logo.png' NavElemnets={["Home","About Us","Academics","Admissions","Student Life","Contact"]}/>
    </div>
  )
}

export default NavBar