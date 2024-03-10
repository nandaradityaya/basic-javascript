const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// dengan menggunakan FOR
const newAngka = []; //const ini akan terisi oleh push dari bawah
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}

console.log(newAngka);

// ---------------------------------------------

// dengan menggunakan FILTER
const bilangan = [-2, 2, 5, 9, 8, 4, -1, -4, 3, 1];

const newBilangan = bilangan.filter((a) => a >= 3); // a itu tulis sembarang aja karna hanya utk merepresentasikan tiap2 element yang ada di dalam variable bilangan
console.log(newBilangan);
// ini pake arrow function, klo yg bawah pake function expression

//-------------------------------------

// const bilangan = [-2, 2, 5, 9, 8, 4, -1, -4, 3, 1];

// const newBilangan = bilangan.filter(function (a) {
//   // a itu tulis sembarang aja karna hanya utk merepresentasikan tiap2 element yang ada di dalam variable bilangan
//   return a >= 3;
// });
// console.log(newBilangan);

//-------------------------------------------

// menggunakan MAP
// kalikan semua angka dengan 2
// jadi itu MAP, petakan semua element pada array dengan sebuah fungsi yang baru
const hitung = [-2, 2, 5, 9, 8, 4, -1, -4, 3, 1];
const newHitung = hitung.map((a) => a * 2);
console.log(newHitung);

//----------------------------------

// REDUCE
// reduce itu untuk melakukan sesuatu terhadap seluruh element pada arraynya
// jumlahkan seluruh element pada array
const count = [-2, 2, 5, 9, 8, 4, -1, -4, 3, 1];
// jadi sama aja kaya ( 0 default + -2 + 2 + 5 + 9 + 8 + 4 + -1 + -4 + 3 + 1)
const newCount = count.reduce(
  (accumulator, currentVallue) => accumulator + currentVallue,
  0
); //klo reduce harus ada dua tanda kurung, trs parameternya juga ada dua
// angka 0 paling belakang itu adalah nilai awal sebenarnya yang ada di array count, jadi bisa di ganti nilai awalnya pake angka berapapun. klo skrg karna nilai awalnya 0 maka hasil di consolenya 25, tp klo nilai awalnya di ganti jadi 6 maka nilai di console menjadi 31. jadi pada intinya defaultnya itu adalah 0. dan klo emang 0 gaperlu di tulis
console.log(newCount);

// ----------------------------------------------------

// Method Chaining
// Artinya kita bisa menggabungkan fungsi2 pada higher order function ini dalam satu kali eksekusi, ga perlu di simpan ke dalam variable dlu
// Cari angka > 5
// Hasilnya kalikan 3
// Jumlahkan
const number = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const hasil = number
  .filter((a) => a > 5) // 8,9,9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((acc, curr) => acc + curr, 0); // 78
console.log(hasil);
