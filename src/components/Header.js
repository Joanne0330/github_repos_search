import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                <span style={{fontSize: "48px", color: "white"}}>
                <i class="fab fa-github" style={{size: '5rem'}}/>
                </span>
                <h1 style={{color: 'white'}}>Github Repos Search</h1>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header;