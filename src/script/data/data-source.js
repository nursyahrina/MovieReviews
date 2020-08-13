class DataSource {

    static popularMovies() {
		return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=35d784395c783fd0f588bbd9b34421c8&language=en-US&page=1&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`Most Popular movies are not found`);
            }
        })
	}

    static searchMovie(keyword) {
        const strKeyword = keyword.replace(" ", "%20");
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=35d784395c783fd0f588bbd9b34421c8&language=en-US&query=${strKeyword}&page=1&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

    static getReviews(movieId) {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=35d784395c783fd0f588bbd9b34421c8&language=en-US&page=1`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results){
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`Review is not found`);
            }
        })
    }

    static fetchGenres() {
		return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=35d784395c783fd0f588bbd9b34421c8&language=en-US`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.genres){
                return Promise.resolve(responseJson.genres);
            } else {
                return Promise.reject(`List of genres are not found`);
            }
        })
	}
}

export default DataSource;