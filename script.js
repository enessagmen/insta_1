const evetBtn = document.getElementById("evetBtn");
const hayirBtn = document.getElementById("hayirBtn");
const soru = document.getElementById("soru");
const container = document.getElementById("main-container");

// Şarkı Ayarı
const sarki = new Audio('muzik.mp3');
sarki.loop = true;

// 1. Yazılar ve Fotoğraflar (En Baştan)
function efektleriBaslat() {
    // Kayan E + F Yazıları
    setInterval(() => {
        const text = document.createElement("div");
        text.className = "floating-text";
        text.innerText = "E ❤️ F";
        text.style.left = Math.random() * 90 + "vw";
        text.style.top = "-5vh";
        document.body.appendChild(text);
        
        let moveY = -5;
        const anim = setInterval(() => {
            moveY += 0.5;
            text.style.top = moveY + "vh";
            if(moveY > 105) { clearInterval(anim); text.remove(); }
        }, 30);
    }, 1500);

    // Yukarıdan Süzülen Fotoğraflar
    setInterval(() => {
        const img = document.createElement("img");
        img.src = "foto.jpg"; 
        img.className = "falling-photo";
        img.style.left = Math.random() * 90 + "vw";
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 6000);
    }, 2000);
}
efektleriBaslat();

// 2. Hayır Butonu Kaçma ve Evet Büyütme
let sayac = 0;
const mesajlar = ["Emin misin?", "Enes üzülür ama :(", "Bir daha düşün!", "Bence seviyorsun !", "Yanlış cevap?", "Gerçekten mi?"];

function kac() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    hayirBtn.style.position = "fixed";
    hayirBtn.style.left = x + "px";
    hayirBtn.style.top = y + "px";
    
    // Mesajları sırayla döndür
    hayirBtn.innerText = mesajlar[sayac % mesajlar.length];
    sayac++;
    
    // Evet butonunu her basışta %15 büyüt
    let yeniOlcek = 1 + (sayac * 0.15);
    evetBtn.style.transform = `scale(${yeniOlcek})`;
}

hayirBtn.addEventListener("click", (e) => { e.preventDefault(); kac(); });
hayirBtn.addEventListener("touchstart", (e) => { e.preventDefault(); kac(); });

// 3. EVET'E BASINCA (Final)
evetBtn.addEventListener("click", () => {
    // Müzik burada başlasın
    sarki.play().catch(e => console.log("Müzik çalınamadı:", e));

    soru.innerHTML = "BEN DE SENİ SEVİYORUM FEYZA ❤️";
    evetBtn.style.display = "none";
    hayirBtn.style.display = "none";
    
    // Arka planı değiştir
    document.body.style.backgroundImage = "url('foto.jpg')";
    container.style.backgroundColor = "rgba(255, 255, 255, 0.8)";

    // İçi boş büyüyen kalp
    const heart = document.createElement("div");
    heart.id = "finalHeart";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.display = "block";
        setTimeout(() => {
            heart.style.transform = "translate(-50%, -50%) scale(10)";
        }, 50);
    }, 100);
});