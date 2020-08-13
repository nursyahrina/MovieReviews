import './review-list.js';

class MovieItem extends HTMLElement {

	set movie(movie) {
        this._movie = movie;
        this.render();
    }

    get movieId() {
        return this._movie.id;
    }

    get movieGenreIds() {
        return this._movie.genre_ids;
    }
    
	render() {
        const stars = this.setStarsDisplay(this._movie.vote_average);

        /* handle null movie poster from data API */
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
            }
		</style>
		<section class="movie media bg-light text-dark flex-wrap shadow rounded-lg p-4 mt-4">
            <img class="my-3 ml-3 mr-2 rounded-lg shadow" src="${moviePoster}" alt="${this._movie.title} Movie Poster" style="width: 200px;">
            <div class="media-body d-flex flex-column align-items-stretch m-0 p-2">
                <h3 class="text-primary p-2">${this._movie.title}</h3>
                <div class="d-flex flex-wrap">
                    <p class="px-2 text-muted movie-info">Release date: ${new Date(this._movie.release_date).toDateString()}</p>
                    <p class="px-2 text-muted movie-info" id="genres${this._movie.id}">Genres: </p>
                </div>
                <p class="p-2">${this._movie.overview}</p>
                <div class="d-flex flex-row justify-content-between">
                    <p class="rating mt-3 p-2"><span class="text-dark">Rating: <span class="text-secondary font-weight-bold">${this._movie.vote_average}</span> (${this._movie.vote_count} votes)</span><br>
                        <i class="mt-2 ${stars[0]}"></i>
                        <i class="${stars[1]}"></i>
                        <i class="${stars[2]}"></i>
                        <i class="${stars[3]}"></i>
                        <i class="${stars[4]}"></i>
                    </p>
                    <a class="btn btn-primary align-self-end shadow mb-3 px-3" data-toggle="collapse" 
                    href="#collapseReviews${this._movie.id}" role="button" aria-expanded="true" aria-controls="collapseReviews${this._movie.id}">
                        Reviews<i class="fas fa-angle-double-down ml-2"></i>
                    </a>
                </div>    
            </div>
            
        </section>
        <div class="collapse p-3" id="collapseReviews${this._movie.id}">
            <!-- Reviews -->
        </div>
        `;
        
    }

    setStarsDisplay(rating) {
        /* set stars' display according to the movie's rating value */
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
        return stars;
    }
}
  
 customElements.define("movie-item", MovieItem);