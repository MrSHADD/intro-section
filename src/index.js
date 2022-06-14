import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App/>, document.getElementById("root"))

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


