import React from 'react';
import { useParams } from 'react-router';

const Book = () => {
    const { id } = useParams();
    return (
        <div className="page">
             <h2>Book Detail {console.log('id', id)}</h2>
             <h3>Book Title - </h3>
             <h3>Book Summary</h3>
             <p></p>
             <h4>Written by </h4>   
        </div>
    );
}

export default Book;
