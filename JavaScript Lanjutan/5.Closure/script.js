function init() {
  let nama = "Nanda"; // local variable
  function tampilNama() {
    //inner function (Closure*)
    console.log(nama); // akses ke parent variable
  }
  tampilNama();
}
init();

//-------------------------------------------------------

// contoh 2
function jedug() {
  return function (nama) {
    console.log(nama);
  };
}
let panggilNama = jedug();
panggilNama("Raditya");
panggilNama("Arkhan");

//-----------------------------------------------------

// function factories
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Hallo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("Nanda");
selamatMalam("bedul");
selamatSiang("paul");

//----------------------------------------------------
// private method // ini pake contoh function expression
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})(); //kurung buka kurung tutup terakhir utk nge-jalanin return function baris 44

counter = 100; //pake function spt di atas tidak akan mengganggu jika ada counter baru seperti ini.

console.log(add());
console.log(add());
console.log(add());
