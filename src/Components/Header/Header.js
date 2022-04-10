import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <section className="container">
            <div className="d-flex justify-content-center mt-2">
                <img className="w-25 " src={logo} alt="logo" />
            </div>
        </section>
    );
};

export default Header;