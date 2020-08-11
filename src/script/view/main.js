import '../component/movie-list.js';
import '../component/search-header.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-header");
    const movieListElement = document.querySelector("movie-list");

    const initMovieList = async () => {
        try {
            const result = await DataSource.popularMovies();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
        const heading = document.createElement("h4");
        heading.classList += "w-75 align-self-center mt-5 ml-2 mb-0 px-5";
        heading.innerHTML = "Top Popular";
        movieListElement.insertAdjacentElement("beforebegin", heading);
    };

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
        movieListElement.previousElementSibling.remove();
        movieListElement.firstElementChild.classList.add("mt-5");
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    initMovieList();
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;