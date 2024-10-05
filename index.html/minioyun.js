let gemi;
let yildizlar = [];
let meteorlar = [];
let arkaYildizlar = [];
let puan = 0;
let level = 1;
let clingSound;
let gameOverSound;

function preload() {
soundFormats('mp3', 'ogg');
clingSound = loadSound('cling.mp3');
gameOverSound = loadSound('gameover.mp3');
}

function setup() {
createCanvas(400, 400);
gemi = new Gemi();
for (let i = 0; i < 100; i++) {
arkaYildizlar.push(new ArkaYildiz());
}
}

function draw() {
background(0);

for (let yildiz of arkaYildizlar) {
yildiz.goster();
yildiz.hareket();
}

gemi.goster();
gemi.hareket();

if (random(1) < 0.05 * level) {
yildizlar.push(new Yildiz());
}

if (random(1) < 0.02 * level) {
meteorlar.push(new Meteor());
}

for (let i = yildizlar.length - 1; i >= 0; i--) {
yildizlar[i].goster();
yildizlar[i].hareket();
if (yildizlar[i].toplandi(gemi)) {
yildizlar.splice(i, 1);
puan += 10;
clingSound.play();
if (puan % 100 === 0) {
level++;
}
}
}

for (let i = meteorlar.length - 1; i >= 0; i--) {
meteorlar[i].goster();
meteorlar[i].hareket();
if (meteorlar[i].carpti(gemi)) {
gameOverSound.play();
noLoop();
textSize(32);
fill(255);
text('oyun bitti!', 125, 200);
}
}

textSize(24);
fill(255);
text('puan: ' + puan, 10, 30);
text('level: ' + level, 280, 30);
}

class Gemi {
constructor() {
this.x = width / 2;
this.y = height - 30;
}

goster() {
fill(255);
triangle(this.x, this.y, this.x - 15, this.y + 30, this.x + 15, this.y + 30);
}

hareket() {
this.x = mouseX;
this.x = constrain(this.x, 15, width - 15);
}
}

class Yildiz {
constructor() {
this.x = random(width);
this.y = 0;
}

goster() {
fill(255, 255, 0);
ellipse(this.x, this.y, 10, 10);
}

hareket() {
this.y += 2 * level;
}

toplandi(gemi) {
return dist(this.x, this.y, gemi.x, gemi.y) < 20;
}
}

class Meteor {
constructor() {
this.x = random(width);
this.y = 0;
}

goster() {
fill(100);
ellipse(this.x, this.y, 20, 20);
}

hareket() {
this.y += 3 * level;
}

carpti(gemi) {
return dist(this.x, this.y, gemi.x, gemi.y) < 25;
}
}

class ArkaYildiz {
constructor() {
this.x = random(width);
this.y = random(height);
this.parlaklik = random(100, 255);
this.hiz = random(0.1, 0.5);
}

goster() {
fill(this.parlaklik);
ellipse(this.x, this.y, 2, 2);
}

hareket() {
this.y += this.hiz;
if (this.y > height) {
this.y = 0;
this.x = random(width);
}
}
}
