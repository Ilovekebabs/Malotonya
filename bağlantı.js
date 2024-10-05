//bağlantı
document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.id = 'main-container';
    document.body.appendChild(container);
    
    // favicon ekleme
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = 'favicon.png'; // ekran görüntüsünü bu isimle kaydet
    document.head.appendChild(favicon);
    
    const logo = document.createElement('div');
    logo.id = 'site-logo';
    logo.style.position = 'absolute';
    logo.style.top = '20px';
    logo.style.right = '20px';
    logo.textContent = 'Malotonya';
    container.appendChild(logo);
    
    const baslik = document.createElement('h1');
    baslik.textContent = 'Hoş Geldiniz';
    baslik.style.textAlign = 'center';
    container.appendChild(baslik);
    
    const icerik = document.createElement('div');
    icerik.id = 'icerik';
    icerik.style.padding = '20px';
    icerik.innerHTML = '<p>Malotonya ana sitesine hoşgeldin</p>';
    container.appendChild(icerik);

    // butonları yükle
if (typeof loadButtons === 'function') {
    loadButtons();
    }
    
    console.log('Sayfa, favicon ve butonlar yüklendi..');
    });

// Ana sayfa içeriği
function gösterAnaSayfa() {
    container.innerHTML = `
    <h1>Hoş Geldiniz</h1>
    <p>Burası Malotonya'nın ana sayfası!</p>
    <p>İstediğiniz diğer içerikleri buraya ekleyebilirsiniz.</p>
    `;
    // Arkaplanı tekrar yükle
    if (typeof yükleArkaplan === 'function') {
    yükleArkaplan();
    }
    }
    
    // Sayfa yüklendiğinde ana sayfayı göster
    gösterAnaSayfa();
    
    console.log('Ana sayfa yüklendi.');
    
    
    

    //arkaplan
    // arkaplan oluşturma
const arkaplan = document.createElement('div')
arkaplan.style.position = 'fixed'
arkaplan.style.top = '0'
arkaplan.style.left = '0'
arkaplan.style.width = '100%'
arkaplan.style.height = '100%'
arkaplan.style.background = 'blue'
document.body.appendChild(arkaplan)

// logo ekleme
const logo = document.createElement('div')
logo.style.position = 'fixed'
logo.style.top = '20px'
logo.style.right = '20px'
logo.style.display = 'flex'
logo.style.alignItems = 'center'

// özel m harfi
const mHarfi = document.createElement('div')
mHarfi.style.width = '50px'
mHarfi.style.height = '50px'
mHarfi.style.backgroundImage = 'url("m_logo.png")' // m harfi görseli buraya
mHarfi.style.backgroundSize = 'contain'
mHarfi.style.backgroundRepeat = 'no-repeat'
mHarfi.style.marginRight = '10px'

// malotonya yazısı
const yazi = document.createElement('span')
yazi.textContent = 'malotonya'
yazi.style.color = 'blue'
yazi.style.fontSize = '24px'

logo.appendChild(mHarfi)
logo.appendChild(yazi)
arkaplan.appendChild(logo)

// animasyon
function animasyonOlustur() {
// gezegenler
const gezegenler = ['#1e90ff', '#4169e1', '#0000cd', '#000080']
gezegenler.forEach((renk, index) => {
const gezegen = document.createElement('div')
gezegen.style.position = 'absolute'
gezegen.style.width = '50px'
gezegen.style.height = '50px'
gezegen.style.borderRadius = '50%'
gezegen.style.background = renk
gezegen.style.left = `-50px`
gezegen.style.top = `${index * 100}px`
arkaplan.appendChild(gezegen)

anime({
targets: gezegen,
translateX: window.innerWidth + 100,
duration: 10000,
easing: 'linear',
loop: true
})
})

// yıldızlar
for (let i = 0; i < 10; i++) {
const yildiz = document.createElement('div')
yildiz.style.position = 'absolute'
yildiz.style.width = '10px'
yildiz.style.height = '10px'
yildiz.style.borderRadius = '50%'
yildiz.style.background = 'white'
yildiz.style.left = `${Math.random() * window.innerWidth}px`
yildiz.style.top = `${Math.random() * window.innerHeight}px`
arkaplan.appendChild(yildiz)

anime({
targets: yildiz,
scale: [1, 1.5],
opacity: [0.5, 1],
backgroundColor: ['#ffffff', '#ffff00', '#ffa500'],
duration: 2000,
direction: 'alternate',
loop: true,
easing: 'easeInOutQuad'
})
}
}

// renkler ve şekiller
function sekilleriOlustur() {
const sekiller = ['circle', 'square', 'triangle']
const renkler = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']

for (let i = 0; i < 5; i++) {
const sekil = document.createElement('div')
sekil.style.position = 'absolute'
sekil.style.width = '30px'
sekil.style.height = '30px'
sekil.style.left = `${Math.random() * window.innerWidth}px`
sekil.style.top = `${Math.random() * window.innerHeight}px`
sekil.style.background = renkler[Math.floor(Math.random() * renkler.length)]

if (sekiller[i % 3] === 'circle') {
sekil.style.borderRadius = '50%'
} else if (sekiller[i % 3] === 'triangle') {
sekil.style.width = '0'
sekil.style.height = '0'
sekil.style.borderLeft = '15px solid transparent'
sekil.style.borderRight = '15px solid transparent'
sekil.style.borderBottom = '30px solid ' + sekil.style.background
sekil.style.background = 'transparent'
}

arkaplan.appendChild(sekil)
}
}

// scroll olayı
window.addEventListener('scroll', () => {
const scrollPos = window.scrollY
const maxScroll = document.documentElement.scrollHeight - window.innerHeight
const darkness = scrollPos / maxScroll
arkaplan.style.background = `rgb(0, 0, ${255 - darkness * 255})`
})

// çalıştır
animasyonOlustur()
sekilleriOlustur()


// yazılar ve görseller
const icerikBolumu = document.createElement('div');
icerikBolumu.style.position = 'absolute';
icerikBolumu.style.bottom = '20px';
icerikBolumu.style.left = '20px';
icerikBolumu.style.color = 'white';

const gorsel = document.createElement('img');
gorsel.src = 'malotonyagörsel.png'; // HTML'de eklediğin görselin adı
gorsel.style.width = '100px';
gorsel.style.marginBottom = '10px';
icerikBolumu.appendChild(gorsel);

const ayarSembolu = document.createElement('span');
ayarSembolu.textContent = '⚙️';
ayarSembolu.style.color = 'purple';
ayarSembolu.style.fontSize = '24px';
icerikBolumu.appendChild(ayarSembolu);

const bilgiMetni = document.createElement('p');
bilgiMetni.textContent = 'malotonya ekibinin ana sunucusunda etkinlikler görevler vb var';
icerikBolumu.appendChild(bilgiMetni);

const emoji = document.createElement('span');
emoji.textContent = '🎉';
emoji.style.color = 'purple';
emoji.style.fontSize = '24px';
icerikBolumu.appendChild(emoji);

const etkinlikMetni = document.createElement('p');
etkinlikMetni.textContent = 'ana sunucuda etkinlikler var bunlar görevler kahraman sistemi pet sistemi market sistemi ve yarışmalar vardır';
icerikBolumu.appendChild(etkinlikMetni);

const sunucuButonu = document.createElement('button');
sunucuButonu.textContent = 'sunucuya gir';
sunucuButonu.style.backgroundColor = '#6a0dad';
sunucuButonu.style.color = 'white';
sunucuButonu.style.padding = '10px 20px';
sunucuButonu.style.border = 'none';
sunucuButonu.style.borderRadius = '5px';
sunucuButonu.style.cursor = 'pointer';
sunucuButonu.onclick = () => window.open('https://discord.gg/gKWVE7xb', '_blank');
icerikBolumu.appendChild(sunucuButonu);

arkaplan.appendChild(icerikBolumu);


document.addEventListener('DOMContentLoaded', () => {
    const miniOyunButon = document.getElementById('miniOyunButon');
    miniOyunButon.addEventListener('click', () => {
    gösterMiniOyunSayfasi();
    });
    });
    //mini oyun
    function gösterMiniOyunSayfasi() {
    const container = document.getElementById('main-container');
    if (container) {
    container.innerHTML = `
    <h1>Mini Oyun</h1>
    <div id="oyun-alani"></div>
    `;
    başlatOyun();
    }
    }
    
    function başlatOyun() {
    const script = document.createElement('script');
    script.src = 'minioyun.js';
    document.body.appendChild(script);
    }