class AboutAppArticle extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
        this.innerHTML = `
        <style>
            .about-dev {
                width: 50%;
                min-width: 560px;
            }
            .about-api {
                width: 25%;
                min-width: 250px;
            }
            @media screen and (max-width: 720px) {
                .about-dev, .about-api {
                    width: 100%;
                }
            }
            @media screen and (max-width: 890px) {
                .about-dev, .about-api {
                    min-width: 75%;
                }
            }
        </style>
		<article id="about" class="d-flex flex-wrap justify-content-center text-dark m-0 p-4">
                <section class="card rounded shadow m-2 p-4 about-dev">
                    <h2 class="display-4 text-secondary mx-3">About Developer</h2>
                    <div class="media flex-wrap">
                        <img class="mt-3 ml-3 rounded-circle" alt="Nursyahrina's Profile" src="https://nursyahrina.000webhostapp.com/img/nursyahrina.jpg" style="width: 120px;">
                        <div class="media-body d-flex flex-column align-items-stretch p-2">
                            <h3 class="px-2 text-primary">Nursyahrina</h3>
                            <p class="px-2">Informatics Engineering Student</p> 
                            <div class="d-flex flex-column px-2">
                                <p class="mb-2">
                                    <i class="fas fa-calendar-day fa-pull-left fa-border text-primary mr-2"></i>
                                    December 17th 1995
                                </p>
                                <p class="mb-2">
                                    <i class="fas fa-map-marker-alt fa-pull-left fa-border text-primary mr-2"></i>
                                    Padang, West Sumatera, Indonesia
                                </p>
                                <p class="mb-2">
                                    <i class="fas fa-envelope fa-pull-left fa-border text-primary mr-2"></i>
                                    nursyahrina17@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>     
                    <p class="text-left small px-3">Hi! I'm currently a student at Institut Teknologi Padang, majoring in Informatics Engineering. Interested in topics around Informatics escpecially data and programming. Like to learn new things and like to learn (self-taught) foreign languages. Fan of soothing/ melancholy musics, hero movies, TV series, and sweet & spicy foods.</p>
                    <p class="lead px-3">Find me on:</p>
                    <p class="d-flex flex-row px-3">
                        <a target="blank" href="https://www.facebook.com/nursyahrina17"><i class="fab fa-facebook-square fa-2x mr-2"></i></a>
                        <a target="blank" href="https://twitter.com/nursy_81"><i class="fab fa-twitter-square fa-2x mr-2"></i></a>
                        <a target="blank" href="https://www.linkedin.com/in/nursyahrina/"><i class="fab fa-linkedin fa-2x mr-2"></i></a>
                        <a target="blank" href="https://github.com/nursyahrina"><i class="fab fa-github-square fa-2x mr-2"></i></a>
                        <a target="blank" href="https://www.youtube.com/channel/UC9X_e_SsHG8dfCKMcM9KMlw"><i class="fab fa-youtube-square fa-2x"></i></a>
                    </p>
                </section>
                <section class="card bg-light rounded shadow m-2 p-4 about-api">
                    <h2 class="display-4 text-center text-secondary">The APIs</h2>
                    <div class="d-flex flex-column">
                        <img class="rounded-circle align-self-center p-3 m-3" src="https://nursyahrina.000webhostapp.com/img/TMDb%20_180.jpg" alt="TMDb logo">
                        <div class="text-center">
                            <p class="mb-2">This website using APIs developed by:</p>
                            <h5>The Movie Database (TMDb)</h5>
                            <a target="blank" href="https://developers.themoviedb.org/3/getting-started/introduction" class="card-link">Check out TMDb APIs docs</a>
                        </div>
                    </div>
                </section>
            </article>
		`;
	}
}

customElements.define("aboutapp-article", AboutAppArticle);