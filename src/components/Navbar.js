import React from "react";


export default function Navbar(){
    return(
        <div className="main">
            <div className="nav-mobile">
              <img src="./images/logo.svg" className="img--logo"/>
              <img src="./images/icon-menu.svg" className="img--hamburger"/>
            </div>
        
        <div className="navbar">
        <img src="./images/logo.svg" className="img--logo"/>
         <div class="dropdown">
           <h3 className="features">Features<img src="./images/icon-arrow-down.svg" className="arrow-down"/></h3>
           <div class="dropdown-content">
                <a href="#"><img src="./images/icon-todo.svg" className="img-db-icon"/>Todo List</a>
                <a href="#"><img src="./images/icon-calendar.svg" className="img-db-icon"/>Calender</a>
                <a href="#"><img src="./images/icon-reminders.svg" className="img-db-icon"/>Reminders</a>
                <a href="#"><img src="./images/icon-planning.svg" className="img-db-icon"/>Planning</a>

            </div>
         </div>

         <div className="dropdown-com">
            <h3 className="company">Company<img src="./images/icon-arrow-down.svg" className="arrow-down"/></h3>
            <div className="dropdown-content-com">
                <a href="#">History</a>
                <a href="#">Our Team</a>
                <a href="#">Blog</a>
            </div>
         </div>
         
            <h3 className="carrers">Carrers</h3>
            <h3 className="about">About</h3>
            <h3 className="login">Login</h3>
            
                <button className="btn--reg">Register</button>
            {/* <div class="hamburger">
                <img src="./images/icon-menu.svg"/>
            </div> */}
        
        </div>
        </div>
    )
}