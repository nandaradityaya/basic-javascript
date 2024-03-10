const ryzen = document.querySelector(".container");
const miracle = document.querySelector(".jumbo");
const razors = document.querySelectorAll(".thumb");

ryzen.addEventListener("click", function (e) {
  //cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    miracle.src = e.target.src;
    miracle.classList.add("fade");
    //pake setTimeout agar setiap klik gambar animasi fadenya jalan terus
    setTimeout(function () {
      miracle.classList.remove("fade");
    }, 500); //500 milisecond (setengah detik)

    razors.forEach(function (razor) {
      // if( razor.classList.contains('active')) {
      //     razor.classList.remove('active');
      // }
      razor.className = "thumb";
      //yang di komentarin diatas sama bawah sama aja
    });

    e.target.classList.add("active");
  }
});
