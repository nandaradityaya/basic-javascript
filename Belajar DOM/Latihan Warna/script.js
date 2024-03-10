const ryzen = document.getElementById("tUbahWarna");
ryzen.onclick = function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

const intel = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");

intel.appendChild(teksTombol);
intel.setAttribute("type", "button"); //attribute type dan nilainya button

ryzen.after(intel);

intel.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1); //math random menghasilkan angka random dari 0 sampe 1 // *255+1 adalah menghasilkan angka random dari satu sampe 255
  const g = Math.round(Math.random() * 255 + 1); //math round untuk ngebuletin angka randomnya
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sMerah = document.querySelector("input[name=sliderMerah");
const sHijau = document.querySelector("input[name=sliderHijau");
const sBiru = document.querySelector("input[name=sliderBiru");

sMerah.addEventListener("input", function () {
  //input adalah fungsi untuk si function
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255); //client X itu sumbu x di bagi window inner itu luas halaman browser
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
