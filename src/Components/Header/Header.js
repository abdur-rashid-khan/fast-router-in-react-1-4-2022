import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../Active Navbar/activeNavBar';
import './Header.css'
const Header = () => {
    return (
        <ul>
            <li>
                <CustomLink to='/home'> Home</CustomLink>
                <CustomLink to='/user'> User</CustomLink>
                <CustomLink to='/about'> About</CustomLink>
            </li>
        </ul>
    );
};

export default Header;