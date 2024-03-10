// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Nanda"];

const [salam, satu, dua, name] = perkenalan;
// const [salam, , , nama] = perkenalan; // ini skip items
console.log(dua);

//---------------------------------------------------------

// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);

//----------------------------------------------------

// return value pada function
function coba() {
  return [1, 2];
}

const [x, y] = coba();
console.log(x);

//------------------------------------------------------

// Rest parameter
const [zux, ...values] = [1, 2, 3, 4, 5, 6]; // 1 akan masuk ke zux, dan sisanya akan masuk ke values
console.log(values);

//----------------------------------------------

// Destruction Object
const mhs = {
  nama: "Nanda Raditya",
  umur: 21,
};

const { nama, umur } = mhs;
console.log(nama);

//------------------------------------------------------

//Assignment tanpa deklarasi object
({ nick, id } = {
  nick: "nandaradityaya",
  id: 2000,
}); // syaratnya harus pake tanda kurung di awal sm akhir
console.log(nick);

//--------------------------------------------------------

// Assign ke variable baru
const warga = {
  nickname: "Arkhan",
  unique: 2019,
};

const { nickname: n, unique: u } = warga;
console.log(n);

//-----------------------------------------------------------

// Memberikan Default Value
const februari = {
  namo: "Legino",
  nim: 2019,
  email: "nandaraditya80@gmail.com",
};

const { namo, nim, email = "email@default.com" } = februari; // email di isi string untuk nilai defaultnya, jadi klo object di atas tdk terdapat email maka akan di isi nilai default yg sudah di isi di sini.
console.log(email);

//---------------------------------------------------------
// Memberi nilai default + assign ke variable baru
const maret = {
  namoo: "Legino",
  nik: 20932,
  mail: "arkhan@gmail.com",
};

const { namoo: o, nik: k, mail: m = "email@default.com" } = maret; // email di isi string untuk nilai defaultnya, jadi klo object di atas tdk terdapat email maka akan di isi nilai default yg sudah di isi di sini.
console.log(m);

//-------------------------------------------------------------
// Rest Parameter
const april = {
  thename: "Legino",
  pass: 20932,
  trap: "arkhan@gmail.com",
};

const { thename, ...nilai } = april;
console.log(nilai);

//---------------------------------------------------
// Mengambil field pada object, setelah dikirim sbg parameter utk function
const mei = {
  unikid: 123,
  myname: "Legino",
  password: 20932,
  gmail: "arkhan@gmail.com",
};

// function getIdMhs(mei) {
//   return mei.unikid;
// }

function getIdMhs({ unikid }) {
  return unikid;
} // ini sama yg di atas sama aja, cuma yg ini lebih keren dan simple
console.log(getIdMhs(mei));
