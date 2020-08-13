import './review-item.js';

class ReviewList extends HTMLElement {
    
    set reviews(reviews) {
        this._reviews = reviews;
        this.render();
    }

    renderError() {
        this.innerHTML = `<h5 class="mx-4 p-2">Sorry, no reviews yet for this movie</h5>`;
    }

    render() {
        this.innerHTML = `<h4 class="mx-4 p-2">Reviews</h4>`;
        this._reviews.forEach(review => {
            const reviewItemElement = document.createElement("review-item");
            reviewItemElement.review = review;
            this.appendChild(reviewItemElement);
        });
    }
}

customElements.define("review-list", ReviewList);