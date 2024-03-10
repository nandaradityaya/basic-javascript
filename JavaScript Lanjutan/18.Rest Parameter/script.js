// Rest Parameter

function myFunc(a, ...myArgs) {
  return `a = ${a}, myArgs = ${myArgs}`;
  // return myArgs;
} // parameter myargs di gunakan untuk menampung sisa array yg belum di tangkap

console.log(myFunc(1, 2, 3, 4, 5));

//-----------------------------------------------------

function miracle() {
  return Array.from(arguments); // array from arguments adalah untuk membuat arguments menjadi arrat
  //return [...arguments]; // ini sama aja ky yg di atas, tp klo ini pake cara spread parameter
} // klo parameter function kosong berarti isi defaultnya itu adalah arguments, jadi ky gini (arguments).

console.log(miracle(1, 2, 3, 4, 5));

//------------------------------------

// bikin penjumlahan pake rest parameter dan for..of
function jumlahkan(...angka) {
  let total = 0;
  for (const a of angka) {
    total += a; // ini adalah jadi semua di tambah 1 + 2 + 3 + 4 + 5
  }
  return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));

//-----------------------------------------------------

// bikin penjumlahan pake rest parameter dan reduce

function penjumlahan(...bilangan) {
  return bilangan.reduce((a, b) => a + b);
}

console.log(penjumlahan(1, 2, 3, 4, 5));

//-------------------------------------------------------

// Rest parameter pada saat melakukan ARRAY destructuring

const kelompok1 = ["Nanda", "Paul", "Ronny", "Fahd", "Haris"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);

//----------------------------------------

// Rest parameter pada saat melakukan OBJECT destructuring
const team = {
  pm: "Arkhan",
  frontEnd1: "Raditya",
  frontEnd2: "Fahrezi",
  backEnd: "Bajank",
  ux: "Sofyan",
  devOps: "Adzi",
};

const { pm, ...myTeam } = team;
console.log(myTeam);

//-------------------------------------------------

// filtering pada parameter yang di kirimkan
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type); // typeof adalah typenya apa, klo typeof dari v nya sama dengan dari typenya, lalu typenya ngecek dari console log di bawah.
}

console.log(filterBy("number", 1, 2, "Legino", false, 10, true, "doddy")); // number di awal bisa di ganti string ataupun boolean, sesuai kita mau nyari tipe yg mana
