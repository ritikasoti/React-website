import React, { useEffect, useState } from 'react'
import './Navbar.css'
import newlogo from '../../assets/newlogo.png'
import menu_icon from '../../assets/menu.png'
 

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll' , () => {
            window.scrollY >500 ? setSticky(true) : setSticky(false);
        })
    },[]);


  return (
    <nav className= {`container ${sticky? 'dark-nav': '' }`} >
        <img src={newlogo} alt='' className='newlogo'    />
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Testimonials</li>
            <li>Blogs</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>

<img src={menu_icon} alt='' className='menu-icon' />
    </nav>
  )
}

export default Navbar
