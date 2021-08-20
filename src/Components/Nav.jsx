import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <h2 className="brand">Yoshi's Library</h2>
            </Link>
            <div className="nav-div">
                <Link to="/"><h2>All Books</h2></Link>
                <Link to="/create"><h2>Add Book</h2></Link>
            </div>
        </nav>
    );
}

export default Nav;
