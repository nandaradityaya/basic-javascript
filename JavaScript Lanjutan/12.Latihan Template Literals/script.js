// 1. HTML Fragments
const mhs = {
  nama: "Nanda Raditya",
  umur: 21,
  nim: "20190803089",
  email: "nandaraditya80@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

document.body.innerHTML = el;

//--------------------------------------------------

// 2. Looping
const warga = [
  {
    nama: "Nanda Raditya",
    email: "nandaraditya80@gmail.com",
  },
  {
    nama: "Arkhan",
    email: "arkhan@gmail.com",
  },
  {
    nama: "Legino",
    email: "legino@gmail.com",
  },
]; // ini adalah array of object

const rame = `<div class="mhs">
    ${warga
      .map(
        (m) => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
    </ul>`
      )
      .join("")}
</div>`;

document.body.innerHTML = rame;

//------------------------------------------------------

// 3. Conditionals
// ternary
const lagu = {
  judul: "Our Song",
  penyanyi: "Niall Horan",
  feat: "Anne Marie",
};

const musik = `<div class="lagu">
<ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
</ul></div>`;

document.body.innerHTML = musik;

//-------------------------------------------------

//4. Nested
// HTML Fragments bersarang

const penduduk = {
  nama: "Nanda Raditya",
  semester: 5,
  mataKuliah: ["Pemrograman Web", "Rekayasa Layanan", "Basis Data", "E-Bisnis"],
};
function cetakMataKuliah(mataKuliah) {
  return `
        <ol>
            ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
        </ol>
    `;
}

const abadi = `<div class="mhs">
    <h2>${penduduk.nama}</h2>
    <span class="semester">Semester : ${penduduk.semester}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakMataKuliah(penduduk.mataKuliah)}
</div>`;

document.body.innerHTML = abadi;
