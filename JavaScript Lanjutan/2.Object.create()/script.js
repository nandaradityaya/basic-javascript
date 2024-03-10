// Pake Function Declaration
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`hallo ${this.nama}, selamat makan!`);
  },

  maen: function (jam) {
    this.energi -= jam;
    console.log(`hallo ${this.nama}, selamat bermain!`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`hallo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let nanda = Mahasiswa("Nanda", 10);
let paul = Mahasiswa("Paul", 20);
