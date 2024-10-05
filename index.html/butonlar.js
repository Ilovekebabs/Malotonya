// Butonları oluşturan fonksiyon
function butonlariOlustur() {
    // Aurox butonu
    const buton = document.createElement('div');
    buton.style.position = 'fixed';
    buton.style.top = '20px';
    buton.style.left = '80px';
    buton.style.padding = '10px 20px';
    buton.style.backgroundColor = '#8254d1';
    buton.style.color = 'white';
    buton.style.borderRadius = '5px';
    buton.style.cursor = 'pointer';
    buton.style.zIndex = '9999';
    buton.textContent = 'aurox';
  
    buton.addEventListener('mouseover', () => {
      anime({
        targets: buton,
        backgroundColor: '#3d3da8',
        duration: 4000,
        easing: 'easeInOutQuad'
      });
    });
  
    buton.addEventListener('mouseout', () => {
      anime({
        targets: buton,
        backgroundColor: '#8254d1',
        duration: 4000,
        easing: 'easeInOutQuad'
      });
    });
  
    document.body.appendChild(buton);
  
    buton.addEventListener('click', () => {
      gösterAuroxSayfasi();
    });
  
    // Ana sayfa butonu
    const anaSayfaButon = document.createElement('div');
    anaSayfaButon.style.position = 'fixed';
    anaSayfaButon.style.top = '20px';
    anaSayfaButon.style.left = '180px';
    anaSayfaButon.style.padding = '10px 20px';
    anaSayfaButon.style.backgroundColor = '#8254d1';
    anaSayfaButon.style.color = 'white';
    anaSayfaButon.style.borderRadius = '5px';
    anaSayfaButon.style.cursor = 'pointer';
    anaSayfaButon.style.zIndex = '9999';
    anaSayfaButon.textContent = 'Ana Sayfa';
  
    anaSayfaButon.addEventListener('mouseover', () => {
      anime({
        targets: anaSayfaButon,
        backgroundColor: '#3d3da8',
        duration: 4000,
        easing: 'easeInOutQuad'
      });
    });
  
    anaSayfaButon.addEventListener('mouseout', () => {
      anime({
        targets: anaSayfaButon,
        backgroundColor: '#8254d1',
        duration: 4000,
        easing: 'easeInOutQuad'
      });
    });
  
    document.body.appendChild(anaSayfaButon);
  
    anaSayfaButon.addEventListener('click', () => {
      gösterAnaSayfa();
    });
  
    // Mini oyun butonu
    const miniOyunButon = document.createElement('div');
    miniOyunButon.style.position = 'fixed';
    miniOyunButon.style.top = '20px';
    miniOyunButon.style.left = '280px';
    miniOyunButon.style.padding = '10px 20px';
    miniOyunButon.style.backgroundColor = '#8254d1';
    miniOyunButon.style.color = 'white';
    miniOyunButon.style.borderRadius = '5px';
    miniOyunButon.style.cursor = 'pointer';
    miniOyunButon.style.zIndex = '9999';
    miniOyunButon.textContent = 'Mini Oyun';
  
    document.body.appendChild(miniOyunButon);
  
    miniOyunButon.addEventListener('click', () => {
      gösterMiniOyunSayfasi();
    });
  }

// Partnerlik butonu
const partnerlikButon = document.createElement('div');
partnerlikButon.style.position = 'fixed';
partnerlikButon.style.top = '20px';
partnerlikButon.style.left = '380px';
partnerlikButon.style.padding = '10px 20px';
partnerlikButon.style.backgroundColor = '#8254d1';
partnerlikButon.style.color = 'white';
partnerlikButon.style.borderRadius = '5px';
partnerlikButon.style.cursor = 'pointer';
partnerlikButon.style.zIndex = '9999';
partnerlikButon.textContent = 'Partnerlik';

document.body.appendChild(partnerlikButon);

partnerlikButon.addEventListener('click', () => {
gösterPartnerlikSayfasi();
});

  
  // Sayfa işlevleri
  function gösterAuroxSayfasi() {
    const container = document.getElementById('main-container');
    if (container) {
      container.innerHTML = `
        <h1>aurox sayfası</h1>
        <p>burası aurox'un özel sayfası!</p>
      `;
    }
  }
  
  function gösterAnaSayfa() {
    const container = document.getElementById('main-container');
    if (container) {
      container.innerHTML = `
        <h1>Hoş Geldiniz</h1>
        <p>Burası Malotonya'nın ana sayfası!</p>
      `;
    }
  }
  
  function gösterMiniOyunSayfasi() {
    const container = document.getElementById('main-container');
    if (container) {
      container.innerHTML = `
        <h1>Mini Oyun</h1>
        <p>Burası Mini Oyun sayfası!</p>
        <div id="oyun-alani"></div>
      `;
    }
  }
  
  function gösterPartnerlikSayfasi() {
    const container = document.getElementById('main-container');
    if (container) {
    container.innerHTML = `
    <h1>Partnerlik</h1>
    <p>Burası Partnerlik sayfası!</p>
    <div id="partnerlik-alani"></div>
    `;
    }
    }



  // Sayfa yüklendiğinde ve her sayfa değişiminde butonları oluştur
  document.addEventListener('DOMContentLoaded', butonlariOlustur);
  window.addEventListener('popstate', butonlariOlustur);