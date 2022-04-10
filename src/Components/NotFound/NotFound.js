import React from 'react';
import NavBar from '../Shares/NavBar/NavBar';


const NotFound = () => {
    return (
        <section className="container">
            <NavBar />

            <div className="mt-5">
                <h1 className="text-danger"> sorry! not fount .. try latter....</h1>
            </div>
        </section>
    );
};

export default NotFound;