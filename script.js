console.log("Navbar Loaded Successfully");

const openRegion = document.getElementById("openRegion");
const closeRegion = document.getElementById("closeRegion");
const regionPopup = document.getElementById("regionPopup");

openRegion.addEventListener("click", () => {
    regionPopup.style.display = "flex";
});

closeRegion.addEventListener("click", () => {
    regionPopup.style.display = "none";
});

// Close popup on outside click
regionPopup.addEventListener("click", (e) => {
    if (e.target === regionPopup) {
        regionPopup.style.display = "none";
    }
});
