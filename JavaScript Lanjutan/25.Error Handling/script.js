const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  // async digunakan untuk memberi tahu javascript bahwa di dalam function ini ada sesuatu yg asynchronous. lalu kita tinggal kasih tau mana yg async dengan cara menggunakan await
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value); // await di gunakan untuk memberi tahu javascript bahwa bagian ini yg masuk ke dalam asynchronous. ini artinya tunggu dlu sampe promisenya resolve agar yg keluar teteap object, klo udah resolve baru deh di masukin ke variable moviesnya
    updateUI(movies); // fungsi ini utk melooping card lalu simpan ke container
  } catch (err) {
    // console.log(err);
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=9870d53&s=" + keyword
  ) //apapun yang di input oleh user, jadi ambil value inputan user (apa yg di ketikan user di kolom search movie)
    .then((response) => {
      if (!response.ok) {
        // jika responsenya not ok
        throw new Error(response.statusText); // lempar error ke catch di atas dengan response status text. status text itu berarti unauthorized klo error
      }
      return response.json(); // klo ok di kerjakan di sini, klo ha oke di kerjakan di throw yg di atas
    })
    .then((response) => {
      if (response.Response === "False") {
        // response r kecil itu dari promise di atas, klo Response R besar itu key dari json
        throw new Error(response.Error);
      }
      return response.Search; // ini klo responsenya true, klo di atas klo error
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m))); // m itu inisiasi dari tiap2 movie
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// ketika tombol detail di klik

// event binding (jadi kita ngasih event ke element yg awalnya blm ada, tapi ketika dia ada eventnya tetap bisa berjalan)
document.addEventListener("click", async function (e) {
  // itu method document di atas di pake supaya ke ambil semua event yg ada di document
  // pake e jangan pake this, karna klo this nanti ke ambil semua
  if (e.target.classList.contains("modal-detail-button")) {
    // jika e.terget nama classnya berisi atau mengandung kata modal-detail-button
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=9870d53&i=" + imdbid)
    .then((response) => response.json()) // ambil responsenya lalu kita jalankan ke dalam method json
    .then((m) => m);
}

function updateUIDetail(m) {
  // jadiin responsenya langsung jadi variable m aja
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

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
