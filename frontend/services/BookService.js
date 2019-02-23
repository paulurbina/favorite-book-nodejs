class BookService {

    constructor() {
        this.URI = 'http://localhost:7000/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = response.json();
        return books;
    }

    async postBook(book) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await response.json();
        console.log(data);
    }

    async deleteBook(bookId) {
        const response = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-type': 'application/json'
            },  
            method: 'DELETE',
        });
        await response.json()
    }

}

export default BookService;