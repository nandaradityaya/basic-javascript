// const close = document.querySelectorAll(".close");

// close.forEach(function (el) {
//   //looping sebagai variable baru yaitu el
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none"; // mentarget elemen x, cariparent.styledisplaynone
//     e.preventDefault(); //mencegah aksi default
//     e.stopPropagation(); //untuk berhentiin event yang ada di parent
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

const ryzen = document.querySelector(".container");

ryzen.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});

// yang di komentarin di atas itu kurang efektif karna target event kliknya di card bukan container
