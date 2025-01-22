import "./styles.css";  
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";


const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');
const contactButton = document.querySelector('#contact');

console.log("Working...")

// document.addEventListener('DOMContentLoaded', loadHomePage);
homeButton.addEventListener('click', loadHomePage);
menuButton.addEventListener('click', loadMenuPage);