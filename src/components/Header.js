import React from 'react';
import '../styles/Header.css';
import {FiSearch} from 'react-icons/fi';

const Header = () =>{
    return(

        <div className="Header">
           <nav>
           <img className='logo' src="https://gcdnb.pbrd.co/images/jnPQMW4T6nAA.png?o=1" alt="logo"/>
             <h1 className='greeting'>Good Afternoon,sai</h1>
             <div className="search-box">
                <FiSearch size="20px" color='grey'/>
                <input 
                placeholder="Search..."
                />
             </div>
            
             <img className="profile-pic" src="https://c.superprof.com/i/a/24588147/11237620/600/20230117022547/mobile-app-developer-with-experience-developing-both-android-and-ios-apps-using-flutter-well-knowledge-backend.jpg" alt="profile-pic"/>
           </nav>
        </div>
    )
}

export default Header