// document.querySelectorAll() -> Node List
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "green";
}
