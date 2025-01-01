import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";

const Header = () => {
  return (
    
    <nav class="navbar col-lg-12 col-12 p-0 d-flex flex-row">
       <div className='d-flex flex-column marg'>
        <div className='d-flex align-items-center justify-content-center mb-1'>
          <div className='text-white'><FaAngleLeft /></div>
          <div className='text-white'>MULTIPLAYER / SERVER BROWSER /</div>
        </div>

        <h3 className='text-white '>SERVER INFO</h3>
      </div> 
    </nav>
         
  )
}

export default Header
