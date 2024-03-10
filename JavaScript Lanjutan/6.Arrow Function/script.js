// Function Expression
const tampilNama = function (nama) {
  return `Hallo ${nama}`;
};
console.log(tampilNama("Nanda"));

// Arrow Function
const tampilData = (nama) => {
  return `Hallo ${nama}`;
};
console.log(tampilData("Arkhan"));

// Arrow Function yang Parameternya dua
const tampilAja = (nama, waktu) => {
  return `Hallo ${waktu}, ${nama}`;
};
console.log(tampilAja("Bedul", "Malam"));

// Implisit Return (Arrow Function lebih singkat klo menurut gue)
const tampilArah = (nama) => `Hallo ${nama}`;
console.log(tampilArah("Miracle"));

//Tanpa Parameter
const tampilTanpa = () => "Hallo World!";
console.log(tampilTanpa());

// Function Map *untuk memetakan sebuah function ke dalam array
let mahasiswa = ["Nanda Raditya", "Arkhan Fahrezi", "Legino"];

let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});
console.log(jumlahHuruf);

// Function Map pake Arrow Function
let penduduk = ["Dewi Sinta", "Haris Nugraha", "Gaby"];
let jumlahAbjad = penduduk.map((nama) => nama.length);
console.log(jumlahAbjad);

// Mengembalikan dalam bentuk object
let warga = ["Syifaul Mukminin", "Fadh Alamudi", "Ronny Astama"];
let jumlahWords = warga.map((nama) => ({ nama: nama, jmlHuruf: nama.length })); //kurung kurawalnya di bungkus tanda kurung biasa supaya di anggap object, klo ga di bungkus kurung biasa nanti javascript ngiranya itu return function
console.table(jumlahWords);
