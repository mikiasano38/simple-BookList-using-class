'use strict';

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookTolist(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    deleteBook(target) {
        if(target.classList.contains("delete")) {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
}

//Event Listener
document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //get form data
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    //Instantiate Book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    if(title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields");
    } else {
        //Add Book to list
        ui.addBookTolist(book);

        //clear fields
        ui.clearFields();
    }
})

//Event Listener for delete
document.getElementById("book-list").addEventListener("click", (e) => {
    // console.log(e.target);

    //Instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);
})