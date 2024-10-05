// Arka plan ve animasyon
const arkaplan = document.createElement('div');
arkaplan.id = 'arkaplan';
arkaplan.style.cssText = `
  background: linear-gradient(to bottom, purple, #4B0082);
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

for (let i = 0; i < 4; i++) {
  const kus = document.createElement('img');
  kus.src = 'mor_anka_kusu.png';
  kus.style.cssText = `
    position: absolute;
    left: -100px;
    top: ${i * 25}%;
    animation: ucusAnimasyonu 10s linear ${i * 1.25}s infinite;
  `;
  arkaplan.appendChild(kus);
}

// Sunucu profili
const sunucuProfili = document.createElement('img');
sunucuProfili.src = 'sunucu_profil.png';
sunucuProfili.style.cssText = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
`;

// Etkinlikler karesi
const etkinliklerKaresi = document.createElement('div');
etkinliklerKaresi.style.cssText = `
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
`;

const etkinliklerBaslik = document.createElement('h2');
etkinliklerBaslik.textContent = 'Etkinlikler';
etkinliklerKaresi.appendChild(etkinliklerBaslik);

const etkinlikler = [
  { isim: 'MTCoin', aciklama: 'Bu para ile sunucuda bişeyler alabilirsiniz' },
  { isim: 'Pet Savaşları', aciklama: 'Parayla aldığınız petlerle savaşacaksınız' },
  { isim: 'Süper Kahraman Oyunu', aciklama: 'Marketten aldığınız iksirlerle kahraman olup turnuvalara katılacaksınız' },
  { isim: 'Özel Görevler', aciklama: 'Görevleri tamamlarsanız MT coin alacaksınız' },
  { isim: 'Countryballs Hikaye', aciklama: 'Karakter alıp hikayeyi tamamlayacaksınız' },
  { isim: 'Bilgi Yarışı', aciklama: 'Kim milyoner ister gibi bir yarış yapacaksınız' }
];

etkinlikler.forEach(etkinlik => {
  const etkinlikButon = document.createElement('button');
  etkinlikButon.textContent = etkinlik.isim;
  etkinlikButon.addEventListener('click', () => gosterEtkinlikBilgisi(etkinlik));
  etkinliklerKaresi.appendChild(etkinlikButon);
});

// Sunucuya katıl butonu
const katilButon = document.createElement('a');
katilButon.href = 'https://discord.gg/nsKHJTqy';
katilButon.textContent = 'Sunucuya Katıl';
katilButon.style.cssText = `
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px 20px;
  background-color: #7289DA;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

document.body.appendChild(arkaplan);
document.body.appendChild(sunucuProfili);
document.body.appendChild(etkinliklerKaresi);
document.body.appendChild(katilButon);

// Etkinlik bilgilerini gösterme fonksiyonu
function gosterEtkinlikBilgisi(etkinlik) {
  const bilgiKutusu = document.createElement('div');
  bilgiKutusu.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 1000;
  `;
  
  const baslik = document.createElement('h3');
  baslik.textContent = etkinlik.isim;
  
  const aciklama = document.createElement('p');
  aciklama.textContent = etkinlik.aciklama;
  
  const kapatButon = document.createElement('button');
  kapatButon.textContent = 'Kapat';
  kapatButon.addEventListener('click', () => bilgiKutusu.remove());
  
  bilgiKutusu.appendChild(baslik);
  bilgiKutusu.appendChild(aciklama);
  bilgiKutusu.appendChild(kapatButon);
  
  document.body.appendChild(bilgiKutusu);
}

// CSS animasyonu
const style = document.createElement('style');
style.textContent = `
  @keyframes ucusAnimasyonu {
    from { left: -100px; }
    to { left: 100%; }
  }
`;
document.head.appendChild(style);
