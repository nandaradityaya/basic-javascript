// DOM Selection

// document.getElementById() -> element

const miracle = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Nandul";

// document.getElementsByTagName() -> HTML Collection
const razor = document.getElementsByTagName("p");

for (let i = 0; i < razor.length; i++) {
  razor[i].style.backgroundColor = "lightblue";
}

const ryzen = document.getElementsByTagName("h1");
ryzen[0].style.fontSize = "50px";

// document.getElementsByClassName() -> HTML Collection
const mikro = document.getElementsByClassName("p2");
mikro[0].innerHTML = "ini diubah dari javascript"; //harus pake array 0 karna HTML Collection

// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const p = document.querySelector("p"); //klo querySelector yang di select hanya yang paling atas atau yg pertama kali
p.innerHTML = "ini di rubah oleh querySelector";
