console.log("Navbar Loaded Successfully");

// ========== GET MODAL ELEMENTS ==========
const modal = document.getElementById("region-modal");
const openBtn = document.getElementById("open-region-modal");
const closeBtn = document.getElementById("close-region-modal");

// ========== CHECK IF ALL ELEMENTS EXIST ==========
if (modal && openBtn && closeBtn) {

    // ========== OPEN MODAL ==========
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
        document.body.style.overflow = "hidden"; // Prevent scroll
    });

    // ========== CLOSE MODAL ==========
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto"; // Allow scroll
    });

    // ========== CLOSE ON BACKDROP CLICK ==========
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
        backdrop.addEventListener("click", (e) => {
            if (e.target === backdrop) {
                modal.classList.remove("show");
                document.body.style.overflow = "auto";
            }
        });
    }

    // ========== CLOSE ON ESC KEY ==========
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });

    // ========== HANDLE COUNTRY SELECTION ==========
    const countryButtons = document.querySelectorAll(".country");

    // Auto-select India English on page load (if present)
    window.addEventListener("load", () => {
        const indiaEnglish = document.getElementById("india-default");
        if (indiaEnglish) {
            countryButtons.forEach(b => b.classList.remove("active", "india-lang"));
            indiaEnglish.classList.add("active", "india-lang");
            console.log("India English auto-selected");
        }
    });

    countryButtons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            // Prevent default and stop propagation
            e.preventDefault();
            e.stopPropagation();

            // Remove active class from all buttons
            countryButtons.forEach(b => {
                b.classList.remove("active", "india-lang");
            });

            // Add active class to clicked button
            this.classList.add("active");
            if (this.classList.contains("india-lang")) {
                this.classList.add("india-lang");
            }

            // Get selected data
            const selectedRegion = this.getAttribute("data-region");
            const selectedCountry = this.textContent.split("\n")[0].trim();

            // Log to console
            console.log("Selected Region:", selectedRegion);
            console.log("Selected Country:", selectedCountry);
        });
    });

    console.log("Region Modal Initialized Successfully");

} else {
    console.log("Warning: Modal elements not found");
    if (!modal) console.log("Missing: region-modal");
    if (!openBtn) console.log("Missing: open-region-modal");
    if (!closeBtn) console.log("Missing: close-region-modal");
}
