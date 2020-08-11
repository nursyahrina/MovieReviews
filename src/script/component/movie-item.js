class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
    }
    
    connectedCallback() {
		this.render();
    }

	render() {
        const rating = this._movie.vote_average;
        const stars = ["fas fa-star fa-lg", "fas fa-star fa-lg", "fas fa-star fa-lg", "fas fa-star fa-lg", "fas fa-star fa-lg"];
        if (rating > 9.0) {
            // do-nothing
        } else if (rating > 8.0) {
            stars[4] = "fas fa-star-half-alt fa-lg";
        } else {
            stars[4] = "far fa-star fa-lg";
            if (rating > 7.0) {
                // do-nothing
            } else if (rating > 6.0) {
                stars[3] = "fas fa-star-half-alt fa-lg";
            } else {
                stars[3] = "far fa-star fa-lg";
                if (rating > 5.0) {
                    // do-nothing
                } else if (rating > 4.0) {
                    stars[2] = "fas fa-star-half-alt fa-lg";
                } else {
                    stars[2] = "far fa-star fa-lg";
                    if (rating > 3.0) {
                        // do-nothing
                    } else if (rating > 2.0) {
                        stars[1] = "fas fa-star-half-alt fa-lg";
                    } else {
                        stars[1] = "far fa-star fa-lg";
                        if (rating > 1.0) {
                            // do-nothing
                        } else if (rating > 0.0) {
                            stars[0] = "fas fa-star-half-alt fa-lg";
                        } else {
                            stars[0] = "far fa-star fa-lg";
                        } 
                    } 
                } 
            } 
        }

        let moviePoster = "https://nursyahrina.000webhostapp.com/img/no_poster.jpg";
        if (this._movie.poster_path !== null) {
            moviePoster = `https://image.tmdb.org/t/p/w200${this._movie.poster_path}`;
        }

		this.innerHTML = `
        <style>
            .rating {
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
            <img class="my-3 mr-2 rounded" src="${moviePoster}" alt="${this._movie.title} Movie Poster" style="width: 200px;">
            <div class="media-body d-flex flex-column align-items-stretch m-2">
                <h3 class="text-primary p-2">${this._movie.title}</h3>
                <div class="d-flex flex-wrap">
                    <p class="px-2 text-muted movie-info">Release date: ${new Date(this._movie.release_date).toDateString()}</p>
                    <p class="px-2 text-muted movie-info">Genres: </p>
                </div>
                <p class="p-2"><em>${this._movie.overview}</em></p>
                <div class="d-flex flex-row justify-content-between">
                    <p class="rating mt-3 p-2"><span class="text-dark">Rating: <span class="lead font-weight-bold">${this._movie.vote_average}</span>/10</span><br>
                        <i class="mt-2 ${stars[0]}"></i>
                        <i class="${stars[1]}"></i>
                        <i class="${stars[2]}"></i>
                        <i class="${stars[3]}"></i>
                        <i class="${stars[4]}"></i>
                    </p>
                    <a href="#" class="btn btn-primary align-self-end mb-3 px-3">Reviews<i class="fas fa-angle-double-down ml-2"></i></a>
                </div>
            </div>
        </section>
        `;    
	}
}
  
 customElements.define("movie-item", MovieItem);