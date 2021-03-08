import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">
                    <span className="icon-style">
                        <i className="fab fa-github" style={{size: '5rem'}}/>
                    </span>
                    <h1 style={{color: 'white'}}>  Github Repos Search</h1>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header;