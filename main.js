document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.querySelector(".booking-form");
    const submitBtn = document.querySelector(".submit-btn");

    if (bookingForm && submitBtn) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault(); 

    
            const explorerName = document.getElementById("explorer-name").value;
            const explorerAge = document.getElementById("explorer-age").value;
            const explorerCountry = document.getElementById("explorer-country").value;
            const explorerPhone = document.getElementById("explorer-phone").value;

            localStorage.setItem("explorerName", explorerName);
            localStorage.setItem("explorerAge", explorerAge);
            localStorage.setItem("explorerCountry", explorerCountry);
            localStorage.setItem("explorerPhone", explorerPhone);
            submitBtn.style.pointerEvents = "none";
            submitBtn.innerHTML = `OPENING MAP GATEWAY... <span class="spinner">⏳</span>`;
            submitBtn.style.background = "linear-gradient(135deg, #bfa169 0%, #8c6f39 100%)";
            submitBtn.style.color = "#0d0906";

            setTimeout(() => {
                window.location.href = "destinations.html";
            }, 2000);
        });
    }  
});
const destinationsData = {
    cairo: {
        title: "المتحف المصري الكبير - Grand Egyptian Museum",
        description: "اكتشف الصرح الأثري الأكبر في العالم الذي يضم أسرار وحضارة ملوك الفراعنة عبر الزمن، واستمتع برؤية تمثال رمسيس الثاني والقطع الأثرية النادرة بجودة أسطورية عبر جولة 360 درجة مذهلة.",
        panoramaUrl: "https://my.matterport.com/show/?m=92gAnP6N5Nf&mls=1" 
    }
};

function openDestinationCard(cityKey) {
    const data = destinationsData[cityKey];
    if (!data) return;

    document.getElementById('card-title').innerText = data.title;
    document.getElementById('card-description').innerText = data.description;
    
    const tourBtn = document.getElementById('start-tour-btn');
    tourBtn.onclick = function() {
        startPanoramaTour(data.panoramaUrl);
    };

    // إظهار الـ Popup
    document.getElementById('destination-card').classList.remove('hidden');
}

function closeDestinationCard() {
    document.getElementById('destination-card').classList.add('hidden');
}

function startPanoramaTour(url) {
    closeDestinationCard(); 
    const viewerContainer = document.getElementById('panorama-viewer-container');
    const iframe = document.getElementById('panorama-iframe');
    
    iframe.src = url; 
    viewerContainer.classList.remove('hidden'); 
}

function closePanorama() {
    const viewerContainer = document.getElementById('panorama-viewer-container');
    const iframe = document.getElementById('panorama-iframe');
    
    iframe.src = ""; 
    viewerContainer.classList.add('hidden');
}