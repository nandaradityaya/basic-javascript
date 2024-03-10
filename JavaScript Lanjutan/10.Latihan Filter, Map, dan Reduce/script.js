// Ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]")); // Array.from artinya merubah tipenya menjadi array

// Pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")) // Cari atau filter video yang di dalamnya terdapat textcontent javascript lanjutan

  // Ambil durasi masing2 vidio
  .map((item) => item.dataset.duration) // dataset.duration untuk mengambil data yang sudah kita berikan nama di html

  // Ubah durasi menjadi float, lalu ubah menit menjadi detik
  .map((waktu) => {
    // 10;30 -> [10, 30] split
    const parts = waktu.split(":").map((part) => parseFloat(part)); //parseFloat untuk mengubah menjadi float, yang di dalem kurung adalah parameter yang ingin di ubah menjadi float
    return parts[0] * 60 + parts[1]; //parts itu keseluruhan durasi, klo part si menit dan detik
  })

  // Jumlahkan semua detik
  .reduce((total, detik) => total + detik, 0); // untuk penjelasan parameternya liat di contoh sebelumnya aja mengenai reduce

// Ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600); //math floor itu pembulatan ke bawah, klo math ceil pembulatan ke atas, klo math round pembulatan ke paling dekat
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;

console.log(jmlVideo);
