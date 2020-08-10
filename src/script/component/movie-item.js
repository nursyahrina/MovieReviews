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
		</style>
		<section class="movie media flex-wrap shadow-lg rounded p-4">
            <img class="mr-3" src="https://raw.githubusercontent.com/nursyahrina/MovieReviews/master/assets/nursyahrina.jpg" alt="Card image cap" style="width: 200px;">
            <div class="media-body d-flex flex-column align-items-stretch ">
                <h3 class="p-2 mt-3">Movie title</h3>
                <div class="d-flex flex-wrap">
                    <p class="px-2 mb-2 text-muted movie-info">Release date: Wed July 12 2019</p>
                    <p class="px-2 mb-2 text-muted movie-info">Genres: </p>
                </div>
                <p class="p-2">Movie desciption: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex flex-row justify-content-between">
                    <p class="rating mb-2 px-2"> Rating:<br>
                        <i class="mt-2 fas fa-star fa-lg"></i>
                        <i class="fas fa-star fa-lg"></i>
                        <i class="fas fa-star fa-lg"></i>
                        <i class="fas fa-star-half-alt fa-lg"></i>
                        <i class="far fa-star fa-lg"></i>
                    </p>
                    <a href="#" class="btn btn-primary align-self-end m-2 px-3">Reviews<i class="fas fa-angle-double-down ml-2"></i></a>
                </div>
            </div>
        </section>
		`;
	}
}
  
 customElements.define("movie-item", MovieItem);