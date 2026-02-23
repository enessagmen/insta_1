const evetBtn = document.getElementById("evetBtn");
const hayirBtn = document.getElementById("hayirBtn");
const soru = document.getElementById("soru");
const heartContainer = document.getElementById("heart-container");

let sayac = 0;
const mesajlar = [
    "Emin misin?", "Bak bir daha düşün..", "Feyza üzülür ama!", 
    "Kalbim çıt etti şu an", "Hala mı hayır?", "İnat etme gel evet de"
];

// Hayır butonunun üzerine gelince (Kaçma efekti)
hayirBtn.addEventListener("mouseover", () => {
    // Sadece birkaç denemeden sonra kaçmaya başlasın ki başta basılabilecek sanılsın
    if (sayac > 1) {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 100);
        hayirBtn.style.position = "fixed";
        hayirBtn.style.left = x + "px";
        hayirBtn.style.top = y + "px";
    }
});

// Hayır butonuna tıklandığında
hayirBtn.addEventListener("click", () => {
    hayirBtn.innerText = mesajlar[Math.min(sayac, mesajlar.length - 1)];
    // Evet butonunu devleştir
    let currentSize = parseFloat(window.getComputedStyle(evetBtn).fontSize);
    evetBtn.style.fontSize = (currentSize + 15) + "px";
    evetBtn.style.padding = (currentSize / 2 + 10) + "px " + (currentSize + 20) + "px";
    sayac++;
});

// EVET'E BASILINCA
evetBtn.addEventListener("click", () => {
    soru.innerHTML = "BEN DE SENİ SEVİYORUM <br> FEYZA ❤️";
    evetBtn.style.display = "none";
    hayirBtn.style.display = "none";
    document.body.style.background = "#ff758c"; 
    
    // E + F Kalp Yağmuru
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "E ❤️ F"; 
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }, 150);
});