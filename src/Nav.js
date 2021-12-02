import React from 'react';

function Nav() {
    return (
        <nav>
            <div className="nav_item title"></div>
            <a href="#Home" className="nav_item active">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a href="#About" className="nav_item">
                <i className="fas fa-user-alt"></i>
                <span>About</span>
            </a>
            <a href="#Gallery" className="nav_item">
                <i className="fas fa-images"></i>
                <span>Gallery</span>
            </a>
        </nav>
    )
}

export default Nav;