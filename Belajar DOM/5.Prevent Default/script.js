const close = document.querySelectorAll(".close");

close.forEach(function (el) {
  //looping sebagai variable baru yaitu el
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none"; // mentarget elemen x, cariparent.styledisplaynone
    e.preventDefault(); //mencegah aksi default
  });
});
