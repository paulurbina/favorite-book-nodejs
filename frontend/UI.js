import BookService from './services/BookService';
const bookService = new BookService();

import { format } from 'timeago.js';

class UI {

    async renderBooks() {
        const books = await bookService.getBooks()
        const bookCardContainer = document.getElementById('books-cards');
        bookCardContainer.innerHTML = '';
        books.forEach((book) => {
            const div = document.createElement('div'); 
            div.className = '';
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img style="width:150px;" src="http://localhost:7000${book.imagePath}" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px2">
                                <h4 class="card-title">${book.title}</h4>
                                <p class="card-text">${book.author}</p>
                                <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${format(book.created_at)}
                    </div>
                </div>
            `;
            bookCardContainer.appendChild(div);
        });
    }

    async addNewBook(book) {
        await bookService.postBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm() {
        document.getElementById('book-form').reset();
    }

    renderMessage() {
        
    }

    deleteBook() {

    }

};

export default UI;