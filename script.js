const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // Scroll down → white navbar
        navbar.classList.remove("bg-transparent", "text-white");
        navbar.classList.add("bg-white", "text-black", "shadow-md");
    } else {
        // Reset to transparent
        navbar.classList.add("bg-transparent", "text-white");
        navbar.classList.remove("bg-white", "text-black", "shadow-md");
    }
});
