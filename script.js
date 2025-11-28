/* -------------------------
   BLUE PARTICLES (WORKING)
--------------------------*/
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resizeCanvas();
window.onresize = resizeCanvas;

let particles = [];
for (let i = 0; i < 250; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: "rgba(66,133,244,0.85)" // Google blue
    });
}

function drawParticles() {
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

    requestAnimationFrame(drawParticles);
}
drawParticles();

/* -------------------------
    PARALLAX SCROLL
--------------------------*/
const items = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    items.forEach(el => {
        let depth = el.dataset.depth;
        let move = scrollY / depth;
        el.style.transform = `translateY(${move}px)`;
    });
});

/* -------------------------
    PARALLAX MOUSE
--------------------------*/
window.addEventListener("mousemove", (e) => {
    let x = (e.clientX - window.innerWidth / 2) / 50;
    let y = (e.clientY - window.innerHeight / 2) / 50;

    items.forEach(el => {
        el.style.transform += ` rotateY(${x}deg) rotateX(${-y}deg)`;
    });
});
