import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    renderError(message) {
        this.innerHTML = `<h2 class="mt-4 ml-4 display-4">Movies</h2>`;
        this.innerHTML += `<h2 class="lead text-muted mt-3 ml-4">${message}</h2>`;
    }

    render() {
        this.innerHTML = `
        <h4 id="subheader" class="mt-5 ml-4 mb-0">Most Popular</h4>
        <h2 class="mb-3 ml-4 display-4">Movies</h2>
        `;
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        });
    }
}

customElements.define("movie-list", MovieList);