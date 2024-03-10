const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  //bacanya: jika this classlist di dalamnya terdapat satu
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu]; //satu dua di isi menjadi dua satu
  }
  this.classList.toggle(satu); // toggle akan menambahkan class jika blm ada atau akan menghilangkan class jika sudah ada
  //set timeout utk nunggu dlu beberapa detik lalu jalankan functionnya
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

//NOTE: setTimeOutnya pake Arrow Fucntion agar thisnya ngebaca ke lexical scope. klo ga pake arrow function dia bakal ga muncul karna thisnya ngebaca ke window
