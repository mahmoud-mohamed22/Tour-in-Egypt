document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.querySelector(".booking-form");
    const submitBtn = document.querySelector(".submit-btn");

    if (bookingForm && submitBtn) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const explorerName = document.getElementById("explorer-name").value;
            const selectedDestination = document.getElementById("destination").options[document.getElementById("destination").selectedIndex].text;
            const explorerAge = document.getElementById("explorer-age").value;
            const explorerCountry = document.getElementById("explorer-country").value;
            const explorerPhone = document.getElementById("explorer-phone").value;

            localStorage.setItem("explorerName", explorerName);
            localStorage.setItem("chosenDestination", selectedDestination);
            localStorage.setItem("explorerAge", explorerAge);
            localStorage.setItem("explorerCountry", explorerCountry);
            localStorage.setItem("explorerPhone", explorerPhone);
            submitBtn.style.pointerEvents = "none";
            submitBtn.innerHTML = `OPENING TIME VORTEX... <span class="spinner">⏳</span>`;
            submitBtn.style.background = "linear-gradient(135deg, #bfa169 0%, #8c6f39 100%)";
            submitBtn.style.color = "#0d0906";
            setTimeout(() => {
                window.location.href = "destinations.html";
            }, 2000);
        });
    }
});