// DOM Manipulation

// Buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("ini paragraf baru");

// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// Insert Before
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");

liBaru.appendChild(teksLiBaru);

const ryzen = document.querySelector("section#b ul");
const intel = document.querySelector("section#b ul li:nth-child(2)");

ryzen.insertBefore(liBaru, intel); // parameter kiri itu element baru, parameter kanan itu di insert sebelum element tersebut

// Remove Child
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

// Replace Child
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const miracle = document.getElementById("b");
const mikro = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul baru!");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4); // parameter kiri node baru, parameter kanan node lama. jadi node baru mereplace node lama

// Tandain apa aja yang baru
pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
