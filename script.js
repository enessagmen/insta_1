const hayirBtn = document.getElementById("hayirBtn");
const evetBtn = document.getElementById("evetBtn");
const soru = document.getElementById("soru");

let sayac = 0;
const mesajlar = ["Emin misin?", "Feyza üzülür!", "Yapma be!", "Hala mı?", "Pes ettim!"];

// HAYIR BUTONU KAÇMA MANTIĞI
const kac = () => {
    // Ekran sınırlarını hesapla (Dışarı taşmaması için)
    const x = Math.random() * (window.innerWidth - hayirBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - hayirBtn.clientHeight);
    
    hayirBtn.style.position = "fixed";
    hayirBtn.style.left = x + "px";
    hayirBtn.style.top = y + "px";
};

hayirBtn.addEventListener("mouseover", () => {
    kac();
    hayirBtn.innerText = mesajlar[Math.min(sayac, mesajlar.length - 1)];
    sayac++;
    // Evet butonunu her seferinde büyüt
    evetBtn.style.fontSize = (20 + sayac * 5) + "px";
});

// FOTOĞRAF YAĞMURU FONKSİYONU
function fotoYagdir() {
    const img = document.createElement("img");
    img.src = "foto.jpg"; // GitHub'a yüklediğin fotoğrafın adı tam bu olmalı
    img.classList.add("floating-photo");
    img.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(img);
    
    setTimeout(() => img.remove(), 5000); // 5 saniye sonra siler
}

// EVET'E BASINCA
evetBtn.addEventListener("click", () => {
    soru.innerHTML = "BEN DE SENİ SEVİYORUM <br> FEYZA ❤️";
    evetBtn.style.display = "none";
    hayirBtn.style.display = "none";
    
    // Fotoğraflar yağmaya başlasın
    setInterval(fotoYagdir, 300);
});