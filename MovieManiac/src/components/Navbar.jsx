import React from 'react'

const Navbar = ({fire, star, party}) => {
  return (
    <nav className='navbar'>
        <div>
        <h1>MovieManiac</h1>
        </div>

        
        
        <div className="navbar_links">
        <div className="navbar_links">
            <a href=''> Popular <img src={fire} alt='popular' className='navbar_emoji' /> </a>
        </div>
        <div className="navbar_links">
            <a href=''> Top Rated <img src={star} alt='top-rated' className='navbar_emoji'/> </a>
        </div>
        <div className="navbar_links">
            <a href=''> Upcoming <img src={party} alt='upcoming' className='navbar_emoji'/> </a>
        </div>
        </div>

        <h1> This is test 2</h1>
        <h1> This is navbar Test 2</h1>
    </nav>
  )
}

export default Navbar