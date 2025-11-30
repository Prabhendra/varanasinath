console.log("Navbar Loaded Successfully");

// =========== REGION MODAL FUNCTIONALITY ===========

const modal = document.getElementById("region-modal");
const openBtn = document.getElementById("open-region-modal");
const closeBtn = document.getElementById("close-region-modal");

if (modal && openBtn && closeBtn) {
    // Open modal
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    });

    // Close when clicking backdrop
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-backdrop")) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });

    // Handle country selection
    const countryButtons = document.querySelectorAll(".country");
    countryButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Remove active from all
            countryButtons.forEach(b => {
                b.classList.remove("active");
            });

            // Add active to clicked
            btn.classList.add("active");

            // Get selected region
            const selectedRegion = btn.getAttribute("data-region");
            const selectedCountry = btn.textContent.trim().split("\n")[0];

            console.log("Selected Region:", selectedRegion);
            console.log("Selected Country:", selectedCountry);
        });
    });

    console.log("Region Modal Initialized Successfully");
} else {
    console.log("Warning: Modal elements not found");
}
