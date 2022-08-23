import React from 'react'

function Book(props) {
    return (
        <div>
            <h1>Thse Books From API</h1>
            {props.books.map((book) => {
                return(
                    <div key={book.id}>
                    <h1>{book.title}</h1>
                    <p>{book.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Book
