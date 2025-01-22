import "./styles.css";  
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadAboutPage } from "./about";

const logoButton = document.querySelector('#logo')
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');
const contactButton = document.querySelector('#contact');

console.log("Working...")

document.addEventListener('DOMContentLoaded', loadHomePage);
logoButton.addEventListener('click', loadHomePage)
homeButton.addEventListener('click', loadHomePage);
menuButton.addEventListener('click', loadMenuPage);
aboutButton.addEventListener('click', loadAboutPage);
contactButton.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight); 
})