//  Template Literals / Template String
const nama = "Nanda";
const umur = 21;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

// Embedded Expressions
console.log(`${1 + 1}`);
console.log(`${alert("Hallo!")}`);

// Ternary Operator
const x = 11;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`); // ? itu if, dan : itu else

// HTML Fragments
const mhs = {
  nama: "Nanda Raditya",
  umur: 21,
  nim: "20190803089",
  email: "nandaraditya80@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nim}</span>
</div>`;

console.log(el);
