import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import logo from "./Assets/logo.png"
import cart_icon from "./Assets/cart_icon.png"
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <>
    <div className='nav'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul class='nav-menu'>
        <Link className='link-underline' to="/"><li onClick={()=>{setMenu("shop")}}>Shops {menu==="shop"?<hr/>:<></>}</li></Link>
        <Link className='link-underline' to="/mens"><li onClick={()=>{setMenu("mens")}}>Mens {menu==="mens"?<hr/>:<></>}</li></Link>
        <Link className='link-underline' to="/womens "><li onClick={()=>{setMenu("womans")}}>Womans {menu==="womans"?<hr/>:<></>}</li></Link>
        <Link className='link-underline' to="/kids"><li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr/>:<></>}</li></Link>
        {/* <Link className='link-underline' to="/product"><li>Product</li><hr/></Link> */}
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
    </>
  )
}

export default Navbar