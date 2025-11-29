// Get all menu items
const menuItems = document.querySelectorAll(".menu-item");
const dropdown = document.querySelector(".dropdown");
const panels = document.querySelectorAll(".dropdown-panel");

// Show dropdown on hover
menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const target = item.getAttribute("data-target");

        dropdown.style.display = "grid";

        panels.forEach(panel => {
            panel.style.display = panel.id === target ? "block" : "none";
        });
    });
});

// Hide dropdown when mouse leaves whole area
dropdown.addEventListener("mouseleave", () => {
    dropdown.style.display = "none";
});
