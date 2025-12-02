console.log("Navbar Loaded Successfully");

// ========== REGION MODAL LOGIC ==========
const modal = document.getElementById("region-modal");
const openBtn = document.getElementById("open-region-modal");
const closeBtn = document.getElementById("close-region-modal");


if (modal && openBtn && closeBtn) {
    // Auto-select India English on page load
    window.addEventListener("load", () => {
        const indiaEnglish = document.getElementById("india-default");
        if (indiaEnglish) {
            indiaEnglish.classList.add("active");
            console.log("India English auto-selected");
        }
    });

    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    });


    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    });


    const backdrop = document.querySelector(".modal-backdrop");
    backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            modal.classList.remove("show");
            document.body.style.overflow = "auto";
        }
    });


    const countryButtons = document.querySelectorAll(".country");
    
    countryButtons.forEach(btn => {
        btn.addEventListener("click", function(e) {
    
            e.preventDefault();
            e.stopPropagation();
            
    
            countryButtons.forEach(b => {
                b.classList.remove("active");
            });


            this.classList.add("active");


            const selectedRegion = this.getAttribute("data-region");
            const selectedCountry = this.textContent.trim();


            console.log("Selected Region:", selectedRegion);            console.log("Selected Country:", selectedCountry);
        });
    });

    console.log("Region Modal Initialized Successfully");
}

// ========== SHOP MEGA DROPDOWN LOGIC ==========
const shopLink = document.getElementById("shop-link");
const shopDropdown = document.getElementById("shop-dropdown");

let dropdownOpen = false;
let openTimer = null;
let closeTimer = null;
const OPEN_DELAY = 120;  // ms before opening (Apple-like)
const CLOSE_DELAY = 220; // ms before closing

function openDropdown() {
    if (dropdownOpen) return;
    dropdownOpen = true;
    shopDropdown.classList.add("is-open");
}

function closeDropdown() {
    if (!dropdownOpen) return;
    dropdownOpen = false;
    shopDropdown.classList.remove("is-open");
}

function clearTimers() {
    if (openTimer) {
        clearTimeout(openTimer);
        openTimer = null;
    }
    if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
    }
}

if (shopLink && shopDropdown) {
    // Hover into Shop link
    shopLink.addEventListener("mouseenter", () => {
        clearTimers();
        openTimer = setTimeout(openDropdown, OPEN_DELAY);
    });

    // Leave Shop link
    shopLink.addEventListener("mouseleave", () => {
        clearTimers();
        closeTimer = setTimeout(closeDropdown, CLOSE_DELAY);
    });

    // Hover into dropdown panel (keeps it open when moving mouse)
    shopDropdown.addEventListener("mouseenter", () => {
        clearTimers();
        openDropdown(); // Instant open when hovering dropdown
    });

    // Leave dropdown panel
    shopDropdown.addEventListener("mouseleave", () => {
        clearTimers();
        closeTimer = setTimeout(closeDropdown, CLOSE_DELAY);
    });

    console.log("Shop Mega Dropdown Initialized");
}

console.log("All components loaded successfully");
