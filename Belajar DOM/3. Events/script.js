// onClick
//addEventHandler
const ryzen = document.querySelector(".p3");

function ubahWarnaP3() {
  ryzen.style.backgroundColor = "orange";
}

function ubahWarnaP2() {
  intel.style.backgroundColor = "lightblue";
}

const intel = document.querySelector(".p2");
intel.onclick = ubahWarnaP2;

//addEventListener
const capt = document.querySelector("section#b p");
capt.addEventListener("click", function () {
  const rambo = document.querySelector("section#b ul"); //ambil parent
  const m4 = document.createElement("li"); //bikin element baru
  const teksLiBaru = document.createTextNode("item baru"); //bikin element baru
  m4.appendChild(teksLiBaru); // kita rangkai
  rambo.appendChild(m4); // lalu simpan di dalam ul
});
