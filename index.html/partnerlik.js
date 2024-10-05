// Arka plan ve stilleri ekle
function ekleStiller() {
    const style = document.createElement('style');
    style.textContent = `
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: url('karbackground.jpg') no-repeat center center fixed;
    background-size: cover;
    }
    .partner-listesi {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
    }
    .partner-kart {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    }
    .partner-kart img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    }
    #partnerlik-formu {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    }
    #partnerlik-formu input, #partnerlik-formu textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
    }
    #partnerlik-formu button {
    background: #8254d1;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    }
    @keyframes karYağışı {
    0% {
    transform: translateY(-10vh);
    }
    100% {
    transform: translateY(110vh);
    }
    }
    #partnerlik-alani > div {
    position: relative;
    z-index: 1;
    }
    `;
    document.head.appendChild(style);
    }
    
    // Partner levelleri
    const partnerLevelleri = [
    { isim: "Bronz Partner", gereklilik: "500+ üye" },
    { isim: "Gümüş Partner", gereklilik: "1000+ üye" },
    { isim: "Altın Partner", gereklilik: "2500+ üye" },
    { isim: "Elmas Partner", gereklilik: "5000+ üye" }
    ];
    
    // Partnerlik sayfası içeriği
    function yüklePartnerlikSayfasi() {
    const partnerlikAlani = document.getElementById('partnerlik-alani');
    if (partnerlikAlani) {
    partnerlikAlani.innerHTML = `
    <h2>Mevcut Partnerler</h2>
    <div class="partner-listesi">
    <div class="partner-kart" onclick="window.open('https://discord.gg/N9XY7tE7', '_blank')">
    <img src="kt_birligi.png" alt="Kt Birliği Logo">
    <span>Kt Birliği</span>
    </div>
    <div class="partner-kart" onclick="window.open('https://discord.gg/F29aCWeG', '_blank')">
    <img src="countryballs.png" alt="Countryballs Logo">
    <span>Countryballs Yardım ve Sohbet</span>
    </div>
    <div class="partner-kart" onclick="window.open('macro_destek_link', '_blank')">
    <img src="macro.png" alt="Macro Destek Logo">
    <span>Macro Destek</span>
    </div>
    </div>
    <h2>Partner Seviyeleri</h2>
    <ul>
    ${partnerLevelleri.map(level => <li>${level.isim}: ${level.gereklilik}</li>).join('')}
    </ul>
    <h2>Partner Ol</h2>
    <form id="partnerlik-formu">
    <input type="text" placeholder="Discord Sunucu Adı" required>
    <input type="number" placeholder="Üye Sayısı" required>
    <textarea placeholder="Neden partner olmak istiyorsunuz?" required></textarea>
    <button type="submit">Başvur</button>
    </form>
    `;
    }
    
    const form = document.getElementById('partnerlik-formu');
    if (form) {
    form.addEventListener('submit', handlePartnerlikBasvurusu);
    }
    }
    
    // Başvuru işleme fonksiyonu
    function handlePartnerlikBasvurusu(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const başvuru = {
    sunucuAdı: formData.get('Discord Sunucu Adı'),
    üyeSayısı: formData.get('Üye Sayısı'),
    neden: formData.get('Neden partner olmak istiyorsunuz?')
    };
    console.log('Yeni başvuru:', başvuru);
    alert('Başvurunuz alındı! Yakında size geri dönüş yapacağız.');
    }
    
    // Kar efekti oluşturma fonksiyonu
    function oluşturKarEfekti() {
    const karContainer = document.createElement('div');
    karContainer.style.position = 'fixed';
    karContainer.style.top = '0';
    karContainer.style.left = '0';
    karContainer.style.width = '100%';
    karContainer.style.height = '100%';
    karContainer.style.pointerEvents = 'none';
    karContainer.style.zIndex = '1000';
    document.body.appendChild(karContainer);
    
    function oluşturKarTanesi() {
    const karTanesi = document.createElement('div');
    karTanesi.style.position = 'absolute';
    karTanesi.style.width = '10px';
    karTanesi.style.height = '10px';
    karTanesi.style.background = 'white';
    karTanesi.style.borderRadius = '50%';
    karTanesi.style.pointerEvents = 'none';
    []
    karTanesi.style.transition = 'background-color 5s linear';
    return karTanesi;
    }
    
    function animasyonuBaşlat() {
    for (let i = 0; i < 50; i++) {
    const karTanesi = oluşturKarTanesi();
    karTanesi.style.left = Math.random() * 100 + '%';
    karTanesi.style.top = Math.random() * 100 + '%';
    karTanesi.style.animationDuration = 5 + Math.random() * 10 + 's';
    karTanesi.style.animationDelay = Math.random() * 5 + 's';
    karContainer.appendChild(karTanesi);
    }
    
    setTimeout(() => {
    const karTaneleri = karContainer.children;
    for (let karTanesi of karTaneleri) {
    karTanesi.style.backgroundColor = 'lightblue';
    }
    }, 5000);
    }
    
    setInterval(animasyonuBaşlat, 5000);
    }
    
    // Sayfayı yükle ve efektleri başlat
    ekleStiller();
    yüklePartnerlikSayfasi();
    oluşturKarEfekti();