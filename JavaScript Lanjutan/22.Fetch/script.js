// $(".search-button").on("click", function () {
//   // jquery cariin saya class search-button dan ketika di klik (on click itu ketika di click)
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?i=tt3896198&apikey=9870d53&s=" +
//       $(".input-keyword").val(), // + jquery cari yg nama classnya input-keyword lalu ambil apapun valuenya (apapun yg kita ketikkan)
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(`.movie-container`).html(cards); // cari class movie container lalu timpah di htmlnya cards di atas

//       // Ketika tombol detail di-klik
//       $(".modal-detail-button").on("click", function () {
//         // jquery cariin saya class modal-detail-button dan ketika di klik (on click itu ketika di click)
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=9870d53&i=" +
//             $(this).data("imdbid"), //jquery ambil tombol ini lalu ambil atribut data imdbnya
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

//-----------------------------------------------------------
// yg di atas pake jquery

// Fetch adalah sebuah method pada API javascript utk mengambil resources dari jaringan, dan mengembalikan promise yang selesai (fullfilled) ketika ada response yang tersedia

// FETCH

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=9870d53&s=" + inputKeyword.value
  ) //apapun yang di input oleh user, jadi ambil value inputan user (apa yg di ketikan user di kolom search movie)
    .then((response) => response.json()) // ambil responsenya lalu kita jalankan ke dalam method json, method json di gunakan untuk nampilin datanya, tapi di sini masih berupa promise
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m))); // m itu inisiasi dari tiap2 movie
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // ketika tombol detail di klik
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid; // ngambil dari this (tombol yg kita klik), lalu kita ambil atribut data setnya (yg ada data di depannya) yg namanya imdbid.
          fetch("http://www.omdbapi.com/?apikey=9870d53&i=" + imdbid)
            .then((response) => response.json()) // ambil responsenya lalu kita jalankan ke dalam method json
            .then((m) => {
              // jadiin responsenya langsung jadi variable m aja
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
                <div class="card">
                <img src="${m.Poster}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
                    data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        <li class="list-group-item">
                        <strong>Director : </strong>${m.Director}
                        </li>
                        <li class="list-group-item">
                        <strong>Actors : </strong>${m.Actors}
                        </li>
                        <li class="list-group-item">
                        <strong>Writer : </strong>${m.Writer}
                        </li>
                        <li class="list-group-item">
                        <strong>Plot : </strong>${m.Plot}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>`;
}
