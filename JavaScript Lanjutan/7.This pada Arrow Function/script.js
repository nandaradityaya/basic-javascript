// // Function Expression
// const tampilNama = function (nama) {
//   return `Hallo ${nama}`;
// };
// console.log(tampilNama("Nanda"));

// // Arrow Function
// const tampilData = (nama) => {
//   return `Hallo ${nama}`;
// };
// console.log(tampilData("Arkhan"));

// // Arrow Function yang Parameternya dua
// const tampilAja = (nama, waktu) => {
//   return `Hallo ${waktu}, ${nama}`;
// };
// console.log(tampilAja("Bedul", "Malam"));

// // Implisit Return (Arrow Function lebih singkat klo menurut gue)
// const tampilArah = (nama) => `Hallo ${nama}`;
// console.log(tampilArah("Miracle"));

// //Tanpa Parameter
// const tampilTanpa = () => "Hallo World!";
// console.log(tampilTanpa());

// // Function Map *untuk memetakan sebuah function ke dalam array
// let mahasiswa = ["Nanda Raditya", "Arkhan Fahrezi", "Legino"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// // Function Map pake Arrow Function
// let penduduk = ["Dewi Sinta", "Haris Nugraha", "Gaby"];
// let jumlahAbjad = penduduk.map((nama) => nama.length);
// console.log(jumlahAbjad);

// // Mengembalikan dalam bentuk object
// let warga = ["Syifaul Mukminin", "Fadh Alamudi", "Ronny Astama"];
// let jumlahWords = warga.map((nama) => ({ nama: nama, jmlHuruf: nama.length })); //kurung kurawalnya di bungkus tanda kurung biasa supaya di anggap object, klo ga di bungkus kurung biasa nanti javascript ngiranya itu return function
// console.table(jumlahWords);

//-----------------------------------------------------

// Konsep this pada Arrow Function

// Constructor Function
const Mahasiswa = function () {
  this.nama = "Nanda";
  this.umur = "21";
  this.sayHello = function () {
    console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
  };
};

const dul = new Mahasiswa();

// Arrow Function
// NOTE: gabisa klo mau bikin constructor function pake arrow function, jadi ga semua function bisa pake arrow. tapi klo method bisa
const Warga = function () {
  this.nama = "Arkhan";
  this.umur = "16";
  this.sayHai = () => {
    console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
  };
};

const bedul = new Warga();

// Object Literal
const mhs1 = {
  nama: "Fahrezi",
  umur: 5,
  sayWords: () => {
    console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`); // undefined karna arrow function tidak bisa membaca this
  },
};

// NOTE: Arrow function tidak memiliki konsep this

//Konsep this pada Arrow Function nih contohnya
const Keluarga = function () {
  this.nama = "Legino";
  this.umur = "50";
  this.saySomething = function () {
    //klo ga pake panah ky gini dan berada di dalam variable namanya function expression
    console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
  };

  setInterval(() => {
    // pake arrow function agar this.umur nyari si umur ke lexical scopenya, klo ga pake arrow function dia akan nyari langsung ke global alhasil di console jadi undefined
    console.log(this.umur++);
  }, 500); //artinya jalankan isi dari function di atas setiap 500 mili second
};

const ryzen = new Keluarga();

// NOTE: klo function expression di simpen dulu di dalem variable, klo fucntion declaration dia langsung di buat tanpa bikin variable. dan function declaration kena hosting klo exspression ga kena
