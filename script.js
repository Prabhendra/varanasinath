/* ---------------------------
   GOOGLE ANTIGRAVITY BLUE PARTICLES
----------------------------*/
const canvas = document.getElementById("blueParticles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 260; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: "rgba(52, 122, 255, 0.85)" // Google blue
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ---------------------------
   PARALLAX SCROLL + MOUSE
----------------------------*/
const items = document.querySelectorAll(".parallax-item");

document.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    items.forEach(el => {
        let depth = el.dataset.depth;
        let move = scrollY / depth;

        el.style.transform =
            `translateZ(${move * -1}px) translateY(${move}px)`;
    });
});

document.addEventListener("mousemove", e => {
    let x = (e.clientX - window.innerWidth / 2) / 60;
    let y = (e.clientY - window.innerHeight / 2) / 60;

    items.forEach(el => {
        el.style.transform += 
            ` rotateY(${x}deg) rotateX(${-y}deg)`;
    });
});
