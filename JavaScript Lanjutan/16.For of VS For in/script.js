// for..of

// Array
const mhs = ["Nanda", "Paul", "Haris"];

// ---for biasa---
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// ---forEach---
// mhs.forEach((m) => console.log(m)); //tiap2 element dari array mahasiswa kita representasikan menjadi m

// ---for of---
for (const m of mhs) {
  console.log(m);
}

//-------------------------------------------------------------

// String
const nama = "Nanda";
for (const n of nama) {
  console.log(n);
}

//-----------------------------------------

// forEach array
const family = ["Legino", "Dewi", "Arkhan"];
family.forEach((f, i) => {
  console.log(`${f} adalah family ke-${i + 1}`);
}); // parameter f utk merepresentasikan tiap2 array, parameter i utk merepresentasikan urutan array ke berapanya.

// -----------------------------------------------

// for of array
const warga = ["ronny", "fadh", "paul"];
for (const [l, w] of warga.entries()) {
  console.log(`${w} adalah warga ke-${l + 1}`);
} //entries di gunakan pada saat menggunakan for of, digunakannya entries agar dapat merepresentasikan l dan w untuk tiap2 index dan element array

//------------------------------------------------------

// NodeList
const liNama = document.querySelectorAll(".nama");

// ini pake forEach
// liNama.forEach((n) => console.log(n.textContent)); //textContent untuk ngambil isinya, bisa juga pake innerHTML

// ini pake for..of
for (n of liNama) {
  console.log(n.innerHTML);
}

//-------------------------------------------------------

// arguments
function jumlahkanAngka() {
  // return arguments.reduce((a, i) => a + i); // reduce gabisa
  // arguments.forEach((a) => (jumlah += a)); // for each gabisa
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
} // jadi looping arguments bisanya pake for..of

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//------------------------------------------------------

// for..in
const pubg = {
  nama: "Miracle",
  umur: 21,
  email: "nandaraditya80@gmail.com",
};

for (p in pubg) {
  console.log(pubg[p]);
}
// for..in di gunakan untuk melooping property dari object

// for..of di gunakan untuk melooping isi array dan iterables object yg lain
