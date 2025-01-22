const paragraphs = [
    "At L'Atelier, pasta isn’t just food—it’s an art, a tradition, and a way of bringing people together. Our mission is simple: to craft unforgettable meals with time, patience, and love, using the finest ingredients and the most time-honored techniques.", 
    "Every strand of pasta we serve starts its journey in our kitchen, where it’s carefully hand-rolled, cut, and shaped by artisans who are passionate about their craft. We believe that great pasta takes time, which is why we pour our heart into every step of the process—from preparing fresh dough to slow-cooking rich, flavorful sauces.",
    "Our menu is a celebration of the classics. Whether it’s a velvety plate of fettuccine Alfredo, a hearty bowl of Pasta alla Norma, or a simple yet perfect plate of Pasta al Pomodoro, every dish tells a story. We honor tradition while embracing the seasons, ensuring every bite is fresh, vibrant, and deeply satisfying.", 
    "But L'Atelier is more than just a place to eat—it’s a place to connect. To us, sharing a meal is about more than food; it’s about creating memories with loved ones, and enjoying the magic of good company.",
    "Step into our warm and inviting space, where the scent of garlic and fresh herbs fills the air, and every meal feels like home. Let us take you on a journey to rediscover the joy of authentic, handcrafted pasta.",
    "Welcome to L'Atelier, where every plate is a labor of love and every meal is a celebration of life’s simplest and greatest pleasures.",
]

const content = document.querySelector("#content");

export function loadAboutPage() {
    document.body.style.backgroundImage = ``
    content.textContent = ''
    content.className = 'about-page';
    
    const header = document.createElement("h1");
    header.textContent = 'About Us';
    content.appendChild(header)

    for (let paragraph in paragraphs) {
        const p = document.createElement("p");
        p.textContent = paragraphs[paragraph];
        const br = document.createElement("br");

        content.appendChild(p);
        content.appendChild(br);
    }
}
