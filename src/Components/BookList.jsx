import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({bookList}) => {
    return (
        <div className="page">
            <h2>Book List</h2>
            <div className="card-div">
            {bookList.books.map((book,index)=>{
                return (
                    <Link to="/1 ">
                        <div className="card" key={index}>
                        <div className="img-div">
                            <img />
                        </div>
                        <h3>{book.title}</h3>
                        <div className="card-line"></div>
                        <h5>Written by {book.author}</h5>
                        <button>Open Book</button>
                    </div>
                    </Link>
                );
            })}
            </div>
        </div>
    );
}

export default BookList;
