class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
    }
    
    connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<style>
            .rating i {
                color: gold;
            }
            .movie-info {
                min-width: 275px;
            }
            .tmdb-logo {
                width: 200px;
            }
            @media screen and (max-width: 360px) {
                .movie-info {
                    min-width: 240px;
                }
                .media-body h3 {
                    font-size: 1.4em;
                }
            }
		</style>
		<section class="movie media flex-wrap shadow rounded p-4 mb-3">
            <img class="my-3 mr-2 rounded" src="https://image.tmdb.org/t/p/w200${this._movie.poster_path}" alt="${this._movie.title} Movie Poster" style="width: 200px;">
            <div class="media-body d-flex flex-column align-items-stretch m-2">
                <h3 class="text-primary p-2">${this._movie.title}</h3>
                <div class="d-flex flex-wrap">
                    <p class="px-2 text-muted movie-info">Release date: ${new Date(this._movie.release_date).toDateString()}</p>
                    <p class="px-2 text-muted movie-info">Genres: </p>
                </div>
                <p class="p-2"><em>${this._movie.overview}<em></p>
                <div class="d-flex flex-row justify-content-between">
                    <p class="rating p-2"> Rating:<br>
                        <i class="mt-2 fas fa-star fa-lg"></i>
                        <i class="fas fa-star fa-lg"></i>
                        <i class="fas fa-star fa-lg"></i>
                        <i class="fas fa-star-half-alt fa-lg"></i>
                        <i class="far fa-star fa-lg"></i>
                    </p>
                    <a href="#" class="btn btn-primary align-self-end px-3">Reviews<i class="fas fa-angle-double-down ml-2"></i></a>
                </div>
            </div>
        </section>
		`;
	}
}
  
 customElements.define("movie-item", MovieItem);