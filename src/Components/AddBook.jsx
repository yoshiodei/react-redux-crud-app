import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBook } from './../actions/addBook';

const AddBook = ({addBook}) => {
    
  const history = useHistory();

   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("");

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
        
    const handleAdd = (e) => {
                e.preventDefault();
              let newBook = {
                    title,
                    author,
                    body,
                    id: Math.random().toString()
                };
                
                addBook(newBook);
                setAuthor("");
                setTitle("");
                setBody("");
                history.push("/");
            }


    return  (
                    <div className="page2 page3">
                    <h2>Add New Book</h2>
                    <div className="form-div">
                        <form onSubmit={handleAdd}>
                           <label>Book Title</label>
                           <input type="text" require name="title" value={title} onChange={handleChangeTitle}/>
                           <label>Book Author</label>
                           <input type="text" require name="author" value={author} onChange={handleChangeAuthor} />
                           <label>Book Body</label>
                           <textarea name="body" require value={body} onChange={handleChangeBody}
                           ></textarea> 
                           <button type="submit">Add Book</button>
                        </form>
                    </div>
                    
                </div>
                );
}

const mapDispatchToProps = {addBook}

export default connect(null,mapDispatchToProps)(AddBook);


// import React, { Component } from 'react';


// class AddBook extends Component {
//     constructor(props){
//         super(props)

//         this.state={
//             title: "",
//             author: "",
//             body: ""
//         }
//     }



//     handleChange = (e) => {
//         e.preventDefault();
//         this.setState({[e.target.name]: e.target.value, id: Math.random().toString()});
//         console.log(this.state);
//     }

//     handleAdd = (e) => {
//         e.preventDefault();
//         this.props.addNewBook(this.state);
//         this.setState({
//             title: "",
//             author: "",
//             body: ""
//         });
        
//     }

//     render() {
//         return (
//             <div className="page2">
//             <h2>Add New Book</h2>
//             <div className="form-div">
//                 <form onSubmit={this.handleAdd}>
//                    <label>Book Title</label>
//                    <input type="text" require name="title" value={this.state.title} onChange={this.handleChange}/>
//                    <label>Book Author</label>
//                    <input type="text" require name="author" value={this.state.author} onChange={this.handleChange} />
//                    <label>Book Body</label>
//                    <textarea name="body" require value={this.state.body} onChange={this.handleChange}
//                    ></textarea> 
//                    <button type="submit">Add Book</button>
//                 </form>
//             </div>
//         </div>
//         );
//     }
// }

// export default AddBook;

