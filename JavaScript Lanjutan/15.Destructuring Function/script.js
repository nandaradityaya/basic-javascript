// Destructuring

function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

const [jumlah, kali] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali);

//-------------------------------------------------

function kalkulasi(x, y) {
  return [x + y, x - y, x * y, x / y];
}

const [tambah, kurang, kalii, bagi = "tidak ada"] = kalkulasi(2, 3); // klo pake array destructuring urutannya harus sesuai sama array yg di atas.
console.log(bagi);

//----------------------------------------------------

function matematika(h, m) {
  return {
    plus: h + m,
    minus: h - m,
    multi: h * m,
    distribution: h / m,
  };
}

const { distribution, plus, minus, multi } = matematika(4, 6); // klo pake onject destructuring urutannya ga berpengaruh.
console.log(minus);

//----------------------------------------------------------

// Destructuring function arguments
const mhs1 = {
  nama: "Nanda Raditya",
  umur: 21,
  email: "nandaraditya80@gmail.com",
};

function cetakMhs(mhs) {
  return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`;
} // kita pecah sendiri di sini klo pake function deklaraation biasa, tuh liat yg mhs.nama dan mhs.umur

console.log(cetakMhs(mhs1)); // klo pake function deklaration biasa parameternya kita pecah sendiri di sini bisa, atau di return string di atas juga bisa

// yg di atas tidak pake destructruring
//--------------------------------------------------------------------------------------------------------------------------
// ini pake destructuring (supaya lebih simpel gada yang di pecah)

const warga = {
  name: "Arkhan",
  id: 16,
  mail: "arkhan@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 80,
  },
};

function cetakWrg({ name, id, nilai: { tugas, uts, uas } }) {
  return `Halo, name saya ${name}, saya berid ${id} tahun, dan nilai uas saya adalah ${uas}`;
} // klo pake destructuring di pecahnya di parameter function spt di atas nama dan id di bungkus kurung kurawal

console.log(cetakWrg(warga));

// destructuring arguments juga kepake klo objectnya kompleks, ky di atas contohnya ada object di dalem object
