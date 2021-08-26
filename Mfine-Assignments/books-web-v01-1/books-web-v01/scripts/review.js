class ReviewManager {

    constructor() {
        try {
            let localStoreReviews = localStorage.getItem('reviews');
            this.reviews = JSON.parse(localStoreReviews) || [];
        } catch (err) {
            this.reviews = [];
            localStorage.setItem('reviews', JSON.stringify(this.reviews));
        }
        console.log(this.reviews);
    }

    getBookReviews(bookId) {
        return this.reviews.filter(review => review.bookId === bookId);
    }

    addBookReview(review) {
        this.reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(this.reviews));
    }

}