import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { editBook } from './../actions/editBook';

const EditBook = ({ bookList, editBook }) => {
    const history = useHistory();
    const { id } = useParams();

    let [book] = bookList.books.filter(book=> book.id == id);

   const [title, setTitle] = useState(book.title);
   const [body, setBody] = useState(book.body);
   const [author, setAuthor] = useState(book.author);

    const handleChangeTitle = (e) => {
                e.preventDefault();
                setTitle(e.target.value);
            }
    
    const handleChangeAuthor = (e) => {
                e.preventDefault();
                setAuthor(e.target.value);
            }

    const handleChangeBody = (e) => {
                e.preventDefault();
                setBody(e.target.value);
    }
        
    const handleEdit = (e) => {
                e.preventDefault();
              let editedBook = {
                    title,
                    author,
                    body,
                    id: book.id
                };
                
                editBook(editedBook, id);
                setAuthor("");
                setTitle("");
                setBody("");
                history.push("/");
            }


    return  (
                    <div className="page2 page3">
                    <div className="title-div">
                    <h2>Add New Book</h2>
                    <button onClick={()=>history.go(-1)}>Back</button>
                    </div>    
                    
                    <div className="form-div">
                        <form onSubmit={handleEdit}>
                           <label>Book Title</label>
                           <input type="text" require name="title" value={title} onChange={handleChangeTitle}/>
                           <label>Book Author</label>
                           <input type="text" require name="author" value={author} onChange={handleChangeAuthor} />
                           <label>Book Body</label>
                           <textarea name="body" require value={body} onChange={handleChangeBody}
                           ></textarea> 
                           <button type="submit">Edit Book</button>
                        </form>
                    </div>
                </div>
                );
}

const mapDispatchToProps = { editBook }

const mapStateToProps = (state) => {return { bookList:state }}

export default connect(mapStateToProps,mapDispatchToProps)(EditBook);
