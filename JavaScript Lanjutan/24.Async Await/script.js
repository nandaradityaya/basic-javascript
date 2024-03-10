// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai"); // resolve ketika promise berhasil
      }, waktu);
    } else {
      reject("Kelamaan"); // reject ketika promise gagal
    }
  });
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

async function cobaAsync() {
  // async di gunakan utk ngasih tau javascript bahwa ada code di function yg asynchronous
  try {
    const coba = await cobaPromise(); // await di gunakan utk ngasih tau javascript bahwa di sini loh code yg asynchronousnya. jadi klo ada async itu ada await
    console.log(coba);
  } catch (err) {
    console.log(err);
  }
}

cobaAsync();

// try untuk gantiin resolve pada async, catch ya untuk gantiin catch.
// kita gabisa pake then di dalam async function, jadinya pake try & catch ky di atas, nah klo try ga harus pake parameter tp klo catct harus pake parameter
