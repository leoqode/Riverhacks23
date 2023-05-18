import React from 'react'
import logo from "../assets/mindfulU_logo.png"
import './LandingPage.css';
const LandingPage = () => {
  

  
  return (
    <div>
    <header>
      <title>Your Page Title</title>

      
      <img src={logo} alt="a gorgeous logo" style={{ width: '200px', height: 'auto' }}/>
    
      
    </header>
   <body>
   <div>Welcome! Ready to feel good?</div>
    <button class="landingPageButton">Login</button>
    <button class="landingPageButton">Sign Up</button>
   </body>

   <footer>

    <div> Contact us!</div>
   </footer>
   
   </div>
  )
  
}

export default LandingPage