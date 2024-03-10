// THIS
var a = 10;
console.log(this.a);

// MEMBUAT OBJECT
//Cara 1 - Fucntion Declaration
function halo() {
  console.log(this);
  console.log("halo");
}
this.halo();
//this pada function adalah mengembalikan object global

//Cara 2 - Object Literal
var obj = { a: 10, nama: "Nanda" };
obj.halo = function () {
  console.log(this);
  console.log("halow");
};
obj.halo();
//this pada cara 2 mengembalikan object yang bersangkutan

//Cara 3 - Constructor
function Halo() {
  console.log(this);
  console.log("world");
}
var obj1 = new Halo();
var obj2 = new Halo();
//this pada cara 3 mengembalikan object yang baru dibuat
