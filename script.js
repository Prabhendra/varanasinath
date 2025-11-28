// PARALLAX MOUSE EFFECT
document.addEventListener("mousemove", (e) => {
    const tiltBox = document.querySelector(".smooth-tilt");
    if (!tiltBox) return;

    let x = (e.clientX - window.innerWidth / 2) / 40;
    let y = (e.clientY - window.innerHeight / 2) / 40;

    tiltBox.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

// RESET ON MOUSE LEAVE
document.addEventListener("mouseleave", () => {
    const tiltBox = document.querySelector(".smooth-tilt");
    if (!tiltBox) return;

    tiltBox.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
