import React from 'react';
import { useParams } from 'react-router';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeBook } from './../actions/removeBook';


const Book = ({bookList, removeBook}) => {
    const { id } = useParams();
    const history = useHistory();

    let book = bookList.books.filter(book=> book.id == id);

    const handleDelete = () => {
        removeBook(id);
        history.push("/");
    }

    return (
        <div className="page page3">
             <h2>Book Detail</h2>
             
             { book.map(detail => {
                 return (
                    <div className="book-detail">
                    <h3>{detail.title}</h3>
                    <div className="line"></div>
                    <h4>Book Summary</h4>
                    <p>{detail.body}</p>
                    <h5>Written by {detail.author}</h5>
                    <div className="button-div">
                        <Link to={`/edit/${id}`}>
                            <button className="edit">Edit</button>
                        </Link>
                        <button className="delete" onClick={handleDelete}>Delete</button>
                    </div>
                    </div>
                 )
             })
             }
              
        </div>
    )
}

const mapStateToProps = (state) =>{ return { bookList: state }}

const mapDispatchToProps = { removeBook }

export default connect(mapStateToProps,mapDispatchToProps)(Book);
