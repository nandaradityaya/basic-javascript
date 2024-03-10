// membuat object
// OBJECT LITERAL
var mhs1 = {
  nama: "Nanda Raditya",
  nim: "20190803089",
  email: "nandaraditya80@gmail.com",
  jurusan: "sistem informasi",
};

// kita sudah memiliki sebuah object yg bernama mhs dan di dalamnya terdapat 4 property

var mhs2 = {
  nama: "Paul",
  nim: "20180803000",
  email: "paul@gmail.com",
  jurusan: "teknik informatika",
};

// FUCNTION DECLARATION
function buatObjectMahasiswa(nama, nim, email, jurusan) {
  var mhs = {}; //bikin object kosong
  mhs.nama = nama; //isi object kosong di atas pake parameter functionnya
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

//isi objectnya
var mhs3 = buatObjectMahasiswa(
  "haris",
  "201909833",
  "haris@gmail.com",
  "teknik lingkungan"
);

var mhs4 = buatObjectMahasiswa(
  "rony",
  "2019809833",
  "rony@gmail.com",
  "teknik industri"
);

//!!! NOTE !!!
// pake function declaration lebih enak drpd pake object literal

// CONSTRUCTOR
// klo constractor nama functionnya depannya huruf besar
function Mahasiswa(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa("fadh", "201807843", "fadh@gmail.com", "manajemen"); //klo pake constructor manggil functionnya harus pake new di depannya
