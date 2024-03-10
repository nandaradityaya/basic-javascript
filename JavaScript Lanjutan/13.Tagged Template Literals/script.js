// Tagged Templates
// const nama = "Nanda Raditya";
// const umur = 21;

// // function coba(miracles, ...values) {
// //   let result = "";
// //   miracles.forEach((str, i) => {
// //     result += `${str}${values[i] || ""}`; // si str akan di gabung dengan values dengan index ke-i
// //   }); //str utk ngambil element yang ada di dalam array miracles, lalu i untuk melooping isi dari values
// //   return result;
// // } //...values adalah akan menjadi sebuah array yang isinya semua ekespression yang ada pada template literal, jadi gaperlu jalanin satu2 lagi sebagai parameter. namanya bebas ga harus values.

// //ini pake cara reduce jadi lebih ringkas daripada yang di atas
// function coba(strings, ...values) {
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   ); //kutip terakhir adalah string kosong karna emang string bukan nilai 0
// }

// const zux = coba`Hallo, nama saya ${nama}, umur saya ${umur} tahun`;
// console.log(zux);

//-----------------------------------------------------------------------------------------

// Highlight
const nama = "Nanda Raditya";
const umur = 21;
const email = "nandaraditya80@gmail.com";

//ini pake cara reduce jadi lebih ringkas daripada yang di atas
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  ); //kutip terakhir adalah string kosong karna emang string bukan nilai 0
}

const zux = highlight`Hallo, nama saya ${nama}, umur saya ${umur} tahun, dan email saya adalah ${email}`;

document.body.innerHTML = zux;
