import React from 'react';
import "./Header.css";
function Header() {
    return (
        <div className="header">
            <div className="header-list">
                 <div  class="main-logo">
                    <a routerlinkactive="active" class="passiveLink active" href="/v2">
                         <img  src="https://files.codingninjas.in/cn-logo-dark-9824.svg" alt="Coding Ninjas" />
                    </a>
                 </div>
                 <ul>
                     <a>
                         <li>Home</li>
                     </a>
                     <a>
                         <li>Courses</li>
                     </a>
                     <a>
                         <li>Practice</li>
                     </a>
                     <a>
                         <li>Events</li>
                     </a>
                     <a>
                         <li>Campus Ninjas</li>
                     </a>
                     <a>
                         <li>Blog</li>
                     </a>
                 </ul>
            </div>
            <div className="header-login">
                <button className="btn primary">
                    Login
                </button>
                <button className="btn secondary">
                    Enrol Now
                </button>
            </div>
        </div>
    )
}

export default Header;
