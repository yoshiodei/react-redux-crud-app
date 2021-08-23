import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const BookList = ({bookList}) => {
    return (
        <div className="page">
            <h2>Book List</h2>
            <div className="card-div">
             {bookList.books.map((book,index)=>{
                return (
                    
                        <div className="card" key={index}>
                        <div className="img-div">
                            <img />
                        </div>
                        <h3>{book.title}</h3>
                        <div className="card-line"></div>
                        <h5>Written by {book.author}</h5>
                        <Link to={`/book/${book.id}`}>
                            <button>Open Book</button>
                        </Link>
                    </div>
                    
                );
            })}
            
            </div>
        </div>

        
    );  

}

const mapStateToProps = (state) =>{ return {bookList: state} }

export default connect(mapStateToProps)(BookList);
