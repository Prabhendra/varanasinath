/* ⭐ GOOGLE ANTIGRAVITY BLUE DOT PARTICLES */
(function() {

    const canvas = document.getElementById('antigravityParticles');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // create 250 particles
    const particles = Array.from({ length: 250 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: 0.7 + Math.random() * 0.3
    }));

    function animate() {
        ctx.clearRect(0,0,canvas.width,canvas.height);

        for (let p of particles) {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.fillStyle = `rgba(66,133,244,${p.alpha})`; /* Google Blue */
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    animate();

})();
