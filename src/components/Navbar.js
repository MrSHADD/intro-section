import React from "react";



export default function Navbar(){
    return(
        
        <nav class="navbar">
            <a href="#"><img src="./images/logo.svg" className="img--logo"/></a>
            <div className="nav-menu">
            <ul className="nav-menu-left">
            <div class="dropdown">
                <li className="nav-item">
                    <a href="#" class="nav-link">Features<img src="./images/icon-arrow-down.svg" className="arrow-down" alt="arrowdown"/></a>
                    <div class="dropdown-content">
                        <a href="#"><img src="./images/icon-todo.svg" className="img-db-icon" alt="todo"/>Todo List</a>
                        <a href="#"><img src="./images/icon-calendar.svg" className="img-db-icon" alt="Calender"/>Calender</a>
                        <a href="#"><img src="./images/icon-reminders.svg" className="img-db-icon" alt="Reminder"/>Reminders</a>
                        <a href="#"><img src="./images/icon-planning.svg" className="img-db-icon" alt="Planning"/>Planning</a>
                    </div>
                </li>
            </div>
            <div className="dropdown-com">
                <li className="nav-item">
                    <a href="#" class="nav-link">Company<img src="./images/icon-arrow-down.svg" className="arrow-down" alt="arrowdown"/></a>
                    <div className="dropdown-content-com">
                        <a href="#">History</a>
                        <a href="#">Our Team</a>
                        <a href="#">Blog</a>
                    </div>
            </li>
            </div>
                <li className="nav-item">
                    <a href="#" class="nav-link">Carrers</a>
                </li>
                <li className="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
            </ul>
            <ul className="nav-menu-right">
                <li className="nav-item">
                    <a href="#" class="nav-link">Login</a>
                </li>
                <li className="nav-item">
                    <button className="btn--reg">Register</button>
                </li>
            </ul >
            </div>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        
    )
     
}
