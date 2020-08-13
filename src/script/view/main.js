import '../component/review-list.js';
import '../component/movie-item.js';
import '../component/movie-list.js';
import '../component/search-header.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-header");
    const movieListElement = document.querySelector("movie-list");

    const initMovieList = async () => {
        try {
            const result = await DataSource.popularMovies();
            renderMoviesResult(result);
        } catch (message) {
            fallbackMoviesResult(message);
        } finally {
            displayReviews();
        }
    };

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
            } else {
                fallbackMoviesResult("Sorry, no movies were found using these keywords. Try to enter other keywords. Good luck!");
            }
        } catch (message) {
            fallbackMoviesResult(message);
        } finally {
            location.replace("#movies");
        }
    };

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

    const updateReviews = () => {
        
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

    const renderMoviesResult = results => {
        movieListElement.movies = results;
    };

    const fallbackMoviesResult = message => {
        movieListElement.renderError(message);
    };

    initMovieList();
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;