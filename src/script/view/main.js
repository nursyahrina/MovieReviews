import '../component/review-list.js';
import '../component/movie-item.js';
import '../component/movie-list.js';
import '../component/search-header.js';
import DataSource from '../data/data-source.js';

const main = async () => {
    const searchElement = document.querySelector("search-header");
    const movieListElement = document.querySelector("movie-list");

    /* Initialize list of movies genre from data source */
    const initGenres = async () => {
        try {
            const result = await DataSource.fetchGenres();
            return result;
        } catch (message) {
            console.log(message);
        }
    };
    
    /* Initialize list of movies from data source */
    const initMovieList = async () => {
        try {
            const result = await DataSource.popularMovies();
            renderMoviesResult(result);
        } catch (message) {
            fallbackMoviesResult(message);
        } finally {
            displayReviews();
            displayGenres();
        }
    };

    /* Update list of movies onclick event for search feature */
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            if (result.length > 0) {
                renderMoviesResult(result);
                document.getElementById("subheader").innerHTML = "Search Results";
                document.querySelectorAll("review-list").forEach(review => {
                    review.remove();
                });
                displayReviews();
                displayGenres();
            } else {
                fallbackMoviesResult("Sorry, no movies were found using these keywords. Try to enter other keywords. Good luck!");
            }
        } catch (message) {
            fallbackMoviesResult(message);
        } finally {
            location.replace("#movies");
        }
    };

    /* get list of reviews from data source and display them inside movie-item element */
    const displayReviews = () => {
        const movieItemElements = document.querySelectorAll("movie-item");
        movieItemElements.forEach( async movieItemElement => {
            const movieId = movieItemElement.movieId;
            const reviewListElement = document.createElement("review-list");
            try {
                const result = await DataSource.getReviews(movieId);
                if (result.length > 0) {
                    reviewListElement.reviews = result;
                } else {
                    reviewListElement.renderError();
                }
            } catch (message) {
                reviewListElement.renderError();
            } finally {
                movieItemElement.querySelector(".collapse").appendChild(reviewListElement);  
            }
        });
    };

    /* get list of genres from data source and display them inside movie-item element */
    const displayGenres = () => {
        const movieItemElements = document.querySelectorAll("movie-item");
        movieItemElements.forEach( movieItemElement => {
            const movieId = movieItemElement.movieId;
            const movieGenresElement = document.getElementById(`genres${movieId}`);
            const movieGenreIds = movieItemElement.movieGenreIds;
            movieGenresElement.innerHTML = "Genres: ";

            /*display first genre*/
            movieGenresElement.innerHTML += `${getGenreName(movieGenreIds[0])}`;
            movieGenreIds.unshift();

            movieGenreIds.forEach(movieGenreId => {
                const genreName = getGenreName(movieGenreId);
                movieGenresElement.innerHTML += `, ${genreName}`;
            });
        });
    };

    const renderMoviesResult = results => {
        movieListElement.movies = results;
    };

    const fallbackMoviesResult = message => {
        movieListElement.renderError(message);
    };

    const getGenreName = genreId => {
        let result = "unknown";
        genres.forEach(genre => {
            if(genre.id == genreId) {
                result = genre.name;
            }
        })
        return result;
    }

    const genres = await initGenres();
    await initMovieList();
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;