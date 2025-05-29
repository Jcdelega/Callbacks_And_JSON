let library = {
    "books": [
        { 
            "title": "Cien años de soledad",
            "author": "Gabriel García Márquez", 
            "genre": "Realismo mágico", 
            "availability": true 
        },
        { 
            "title": "1984", 
            "author": "George Orwell", 
            "genre": "Distopía", 
            "availability": true 
        }
    ]
};


function readData(callback) {
    setTimeout(() => {

        callback(library);
    }, 1000);
}


function showBooks() {
    readData((data) => {
        console.log("Books list:");
        data.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} (${book.availability ? 'Available' : 'Borrowed'})`);
        });
    });
}


function addBook(title, author, genre, availability) {
    const newBook = { title, author, genre, availability };
    setTimeout(() => {
        library.books.push(
            { 
            "title": title || null,
            "author": author || null, 
            "genre": genre || null, 
            "availability": availability || null 
        }
        )
    }, 1000);
}

function updateAvailability(title, availability) {
    setTimeout(() => {
        library.books.forEach(book=>{
            if (title===book.title) book.availability = availability;
        })
    }, 1000);
}

showBooks();
addBook("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
updateAvailability("1984", false);
showBooks();