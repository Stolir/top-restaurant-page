import imageURL from './Assets/jorge-zapata-4nXkhLCrkLo-unsplash.jpg'
import { loadMenuPage } from './menu';


const content = document.querySelector("#content");

export function loadHomePage(){
    document.body.style.backgroundImage = `url(${imageURL})`
    content.textContent = ''
    content.className = 'home-page';

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");
    heroText.textContent = "A Story in Every Bite";

    const supportText = document.createElement("div");
    supportText.classList.add("support-text");
    supportText.textContent = "Because the best pasta is made with time, patience, and love."

    const menuButton = document.createElement("button");
    menuButton.id = "explore"
    menuButton.textContent = 'Discover Our Dishes'
    menuButton.addEventListener('click', loadMenuPage)

    content.appendChild(heroText);
    content.appendChild(supportText);
    content.appendChild(menuButton);
}