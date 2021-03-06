class SerchHeader extends HTMLElement {
	connectedCallback() {
		this.render();
    }
    
    set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.querySelector("#inputKeyword").value;
	}

	render() {
        this.innerHTML = `
        <style>
            h1 {
                font-size: 5em;
            }
            .search-form {
                width: 50%;
            }
            @media screen and (max-width: 674px) {
                h1 {
                    font-size: 2.5em;
                }
                .search-form {
                    width: 90%;
                    margin: 0;
                    padding: 0;
                }
            }
            @media screen and (max-width: 1064px) {
                .search-form {
                    width: 75%;
                }
            }
        </style>
		<div class="jumbotron d-flex flex-column bg-dark text-light shadow-lg">
            <h1 class="p-5 mt-5">Welcome to MovieReviews!</h1>
            <h2 class="lead mb-3">Web application to search for movies by title, complete with rating and reviews.</h2>
            <span class="border border-secondary align-self-center my-2 w-75"></span>
            <p class="m-0 p-3">Using <em>The Movie Database (TMDb) APIs</em> to explore millions of movies. <strong>Find out now!</strong></p>
            
            <form class="align-self-center d-flex flex-wrap text-left mt-5 search-form">
                <div class="form-group flex-fill mr-3">
                    <label class="mt-3" for="inputKeyword">Keyword:</label>
                    <input class="form-control shadow-lg" type="text" id="inputKeyword" placeholder="Enter your keyword here!">
                </div>
                <a class="btn btn-primary shadow-lg align-self-end mb-3 px-3" id="searchButtonElement">Search Movie</a>
            </form>
        </div>
        `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
	}
}

customElements.define("search-header", SerchHeader);