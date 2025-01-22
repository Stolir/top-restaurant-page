const menuItems = [
    "Pasta al Pomodoro", 
    "Spaghetti Aglio e Olio", 
    "Spaghetti Carbonara", 
    "Fettuccine Alfredo", 
    "Pasta al Limone", 
    "Pasta alla Norma"];
const content = document.querySelector("#content");

export function loadMenuPage() {
    document.body.style.backgroundImage = ``
    content.textContent = ''
    content.className = 'menu-page';
    for (let item in menuItems) {
        const dish = document.createElement("div");
        dish.classList.add("dish");

        const image = document.createElement("img");

        const dishName = document.createElement("div");
        dishName.classList.add("dish-text");
        dishName.textContent = menuItems[item];

        dish.appendChild(image);
        dish.appendChild(dishName);

        content.appendChild(dish);
    }

}