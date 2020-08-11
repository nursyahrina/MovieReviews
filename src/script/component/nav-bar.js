class NavBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top p-2 px-4">
            <a class="navbar-brand" href="#">MovieReviews</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active ml-2">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item ml-2">
                        <a class="nav-link" href="#movies">Movies</a>
                    </li>
                    <li class="nav-item ml-2">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
		`;
	}
}

customElements.define("nav-bar", NavBar);