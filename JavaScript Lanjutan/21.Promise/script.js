// $.ajax({
//   url: "http://www.omdbapi.com/?i=tt3896198&apikey=9870d53&s=avengers",
//   success: (movies) => console.log(movies),
// });

//----------------------------------------------------------

// ajax versi vanila javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open(
//   "get",
//   "http://www.omdbapi.com/?i=tt3896198&apikey=9870d53&s=avengers"
// );
// xhr.send();

//--------------------------------------------------------

// Menggunakan Fetch (bentuknya promise)
// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9870d53&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

//----------------------------------------------------------

// Promise
// Promise adalah object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang.
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// fungsi callbacknya (resolve / reject / finally) // resolve ketika janji terpenuhi, reject ketika janji tidak terpenuhi, finally ketika waktu tunggunya selesai baik itu terpenuhi atau tidak
// aksi (then / catch) // then akan menjalani resolve, catch akan menjalani reject.

// CONTOH 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Ingkar jani..");
//   }
// });

// janji1
//   .then((response) => console.log("OK : " + response)) // ini klo berhasil
//   .catch((response) => console.log("NOT OK! : " + response)); // klo gagal bisa langsung chaining ambil catch
// resolve di tangkap oleh then
// reject di tangkap oleh catch

//=============================================================

// CONTOH 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2))); //pake ini jadi keliatan asynchronousnya
// janji2
//   .finally(() => console.log("selesai menunggu!")) // method finally dijalankan ketika salah satu dari then atau catch ini sudah siap di jalankan, jadi klo promisenya ga pending lagi finally dlu di jalanin baru deh then atau catch yg di jalanin.
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("NOT OK! : " + response));
// console.log("selesai");

// biasa finally di gunakan klo untuk mau nambahin animasi loading, jadi pada saat mulai jalan promisenya animasi loading jalanin, begitu finally matiin animasi loadingnya

//----------------------------------------------------------------

// Promise.all() // untuk menjalankan banyak promise yg mau di jalanin sekaligus

// ini pake contoh klo kita mau ngambil 2 API yg berbeda
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avemgers",
        sutradara: "Nanda",
        pemeran: "Robert, Steve",
      },
    ]); // ini adalah array of object
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Jakarta",
        temp: 26,
        kondisi: "Cerah Berawan",
      },
    ]); // ini adalah array of object
  }, 500);
});

// di bawah ini cara klo utk jalanin APInya satu-satu
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// Di bawah ini cara klo utk jalanin APInya semua sekaligus, jadi pake method promise all
Promise.all([film, cuaca])
  // .then((response) => console.log(response)); // klo pake ini array di consolenya jadi ke gabung
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  }); // ini pake spread operator supaya hasil array di consolenya ga di gabung, jadinya di pecah
