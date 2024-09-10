import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"
// import { AuthContext } from '../contexts/AuthProvider';
// import { FaHamburger, FaInfo, FaInfoCircle } from 'react-icons/fa';

function Navitems() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSociaToggle] = useState(false)
  const [headerFixed, setHeaderFixed] = useState(false)



  // const {user}= useContext(AuthContext)
  // console.log(user)

  // addevent listerner
  window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200) {
      setHeaderFixed(true);  
    }else{
      setHeaderFixed(false)
    }
    
  })
  return (
    <header className={`header-section style-4 ${headerFixed ? "haeder-fixed fadeInUp" : "" } `}>
      {/* head top start */}
      <div className={`header-top d-lg-none ${socialToggle ? "open" : ""}`}>
        <div className='container'>
          <div className='header-top-area'>
            <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      {/* header button */}
      <div className='header-botton'>
        <div className='container'>
          <div className='header-wrapper'>
            {/* log */}
            <div className='logo-search-acte'>
              <div className='logo'>
                <Link to={'/'}>
                <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className='menu-area'>
              <div className='menu'>
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
               
              </div>
              {/* sign in and login */}
              <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'> Create Account</Link>
              <Link to="/login" className='d-none d-md-block '>Log In</Link>

              {/* menutoggle */}
      <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
        
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* sociaToggle */}
              <div className=' ellepsis-bar d-md-none'onClick={()=> setSociaToggle(!socialToggle)}>
                <i className='icofont-info-square'></i>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Navitems