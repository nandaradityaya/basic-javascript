// Cara untuk membuat object pada javascript

// 1. OBJECT LITERAL

// PROBLEMNYA: Tidak efektif untuk objek yang banyak

// let mahasiswa1 = {
//   nama: "Nanda Raditya",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`hallo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Paul",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`hallo ${this.nama}, selamat makan!`);
//   },
// };

// ---------------------------------------------------------------------------------------

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`hallo ${this.nama}, selamat makan!`);
//   };
//   mahasiswa.maen = function (jam) {
//     this.energi -= jam;
//     console.log(`hallo ${this.nama}, selamat bermain!`);
//   };
//   return mahasiswa;
// }

// let nanda = Mahasiswa("Nanda", 10);
// let paul = Mahasiswa("Paul", 20);

//------------------------------------------------------------------------------

// 3. CONSTRUCTOR
// keyword new
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`hallo ${this.nama}, selamat makan!`);
  };
  this.maen = function (jam) {
    this.energi -= jam;
    console.log(`hallo ${this.nama}, selamat bermain!`);
  };
}

let nanda = new Mahasiswa("Nanda", 10);
