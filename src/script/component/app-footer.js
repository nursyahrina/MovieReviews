class AppFooter extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<footer>
            <p class="bg-secondary text-light m-0 p-3">MovieReviews &#169; 2020, Nursyahrina | Web API Powered by <a class="text-light text-decoration-none font-weight-bold" target="blank" href="https://www.themoviedb.org/documentation/api/">The Movie Database (TMDb)</a></p>
        </footer>
		`;
	}
}

customElements.define("app-footer", AppFooter);