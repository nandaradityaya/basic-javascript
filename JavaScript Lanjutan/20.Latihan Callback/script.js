$(".search-button").on("click", function () {
  // jquery cariin saya class search-button dan ketika di klik (on click itu ketika di click)
  $.ajax({
    url:
      "http://www.omdbapi.com/?i=tt3896198&apikey=9870d53&s=" +
      $(".input-keyword").val(), // + jquery cari yg nama classnya input-keyword lalu ambil apapun valuenya (apapun yg kita ketikkan)
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(`.movie-container`).html(cards); // cari class movie container lalu timpah di htmlnya cards di atas

      // Ketika tombol detail di-klik
      $(".modal-detail-button").on("click", function () {
        // jquery cariin saya class modal-detail-button dan ketika di klik (on click itu ketika di click)
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=9870d53&i=" +
            $(this).data("imdbid"), //jquery ambil tombol ini lalu ambil atribut data imdbnya
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
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
