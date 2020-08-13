class ReviewItem extends HTMLElement {
	set review(review) {
		this._review = review;
		this.render();
  }

	render() {
    this.innerHTML = `
    <blockquote class="blockquote-sm border border-primary rounded-lg mx-2 p-4">
      <p>${this._review.content}</p>
      <footer class="blockquote-footer">${this._review.author} in <cite title="The Movies Database"><a target="blank" href="${this._review.url}">The Movies Database</a></cite></footer>
    </blockquote>
    `;    
  }
}
  
customElements.define("review-item", ReviewItem);