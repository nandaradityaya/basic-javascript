//PROTOTYPE pake constructor

function Mahasiswa(nama, energi) {
  // let mahasiswa = Object.create(methodMahasiswa);
  // let this = Object.create(Mahasiswa.prototype); //di belakang layar terdapat seperti ini
  this.nama = nama;
  this.energi = energi;

  // return mahasiswa;
  // return this;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Hallo ${this.nama}, selamat makan`;
};

Mahasiswa.prototype.maen = function (jam) {
  this.energi -= jam;
  return `Hallo ${this.nama}, selamat bermain`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Hallo ${this.nama}, selamat tidur`;
};

let nanda = new Mahasiswa("Nanda", 10);

//-------------------------------------------------------
//-------------------------------------------------------

// VERSI CLASS (OOP)
class anjay {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, selamat makan`;
  }

  maen(jam) {
    this.energi -= jam;
    return `Hallo ${this.nama}, selamat bermain`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Hallo ${this.nama}, selamat tidur`;
  }
}

let paul = new anjay("Paul", 10);
