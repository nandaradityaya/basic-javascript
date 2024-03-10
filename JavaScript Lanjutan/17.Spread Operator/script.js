// Spread Operator
// memecah iterables menjadi single element

const pubg = ["Nanda", "Paul", "Haris"];
console.log(...pubg); // tiga titik itu adalah spread operator yg di gunakan untuk memecah

//---------------------------------------

// Menggabungkan 2 array
const staff = ["kiki", "andre", "raka"];
const dosen = ["tri", "sandfreni", "wawan"];
const orang = [...staff, ...dosen];
console.log(orang);

//--------------------------------------------------

// meng-copy array
const warga = ["ronny", "rezza", "leo"];
// const warga1 = warga;
const warga1 = [...warga]; // klo pake spread array jadi dia pas copy variablenya trus variable copyannya mau di ganti arraynya itu bisa, jadi variable yg aslinya ga ikutan ke ubah arraynya
warga1[0] = "fajar";
console.log(warga);

//-----------------------------------------------------------

// hubungkan ke html

const liMhs = document.querySelectorAll("li");

// INI PAKE FOR BIASA
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// } // textContent untuk masukin li yg ada di html ke dalam array
// console.log(mhs);

// INI PAKE SPREAD OPERATOR dan MAP
const mhs = [...liMhs].map((m) => m.textContent); // pake spread operator supaya element li pada htmlnya berubah menjadi array agar fungsi map bisa di jalankan, karna klo bukan array fungsi map tidak dapat berjalan.
console.log(mhs);

//------------------------------------------------------

// kasus baru
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join(""); // di spread dlu tiap2 huruf arkhan, lalu tiap2 hurufnya di bungkus dengan span, lalu di join dengan string kosong supaya keluar di consolenya menjadi string aja bukan bentuk array.
nama.innerHTML = huruf; //innerHTML buat nimpa script di sini ke html supaya jalan
