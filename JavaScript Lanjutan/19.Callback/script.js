// Pengertian callback
// Function yang dikirimkan sebagai parameter pada function yang lain.
// Function yang dieksekusi setelah fungsi lain selesai di jalankan.

// Callback
// Synchronous Callback
// sebuah function yang parameternya sebuah function juga

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(Callback) {
//   const nama = prompt(`Masukkan Nama : `);
//   Callback(nama);
// }

// tampilkanPesan(halo);

//-------------------------------------------------

// YG DI ATAS BISA JUGA DI TULIS GINI

// function tampilkanPesan(Callback) {
//   const nama = prompt(`Masukkan Nama : `);
//   Callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

//---------------------------------------------------------

// Synchronous

// const mhs = [
//   {
//     nama: "Nanda Raditya",
//     nim: "20190803089",
//     email: "nandaraditya80@gmail.com",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Paul",
//     nim: "20190803088",
//     email: "paul@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Ronny",
//     nim: "20190803087",
//     email: "ronny@gmail.com",
//     jurusan: "Teknik Industri",
//     idDosenWali: 3,
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

//-------------------------------------------------------

// Asynchronous Callback

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results); // // parse utk parsing supaya methodmya menjadi object
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");
// // 4 itu state terakhir klo udah ready
// // 200 itu artinya oke, berarti kita bisa mengakses sebuah halaman

//-----------------------------------------------------------

// Asynchronous Callback pake JQuery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");

// $ itu untuk manggil json
