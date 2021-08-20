import React from 'react';

const AddBook = () => {
    return (
        <div className="page2">
            <h2>Add New Book</h2>
            <div className="form-div">
                <form>
                   <label>Book Title</label>
                   <input type="text" />
                   <label>Book Author</label>
                   <input type="text" />
                   <label>Book Body</label>
                   <textarea></textarea> 
                   <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
