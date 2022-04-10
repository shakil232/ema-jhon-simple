import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './NavBar.css';


const NavBar = () => {
    const [user, setUser] = useContext(userContext);
   
    return (
        <section className="">
            <Navbar bg="primary" className="mt-2 nav-list mb-5" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mt-2" />
                <Navbar.Collapse id="basic-navbar-nav" >

                    <Nav className="ml-auto ms-auto ">
                        <Link className="me-5 nav-menu " to="/shop" >Shop</Link>
                        <Link className="me-5 nav-menu" to="/review" >Order-Review</Link>
                        <Link className="me-5 nav-menu" to="/manage" >Manage-inventory</Link>

                        {
                            user.isSignedIn && <h4 className="text-warning fs-5 me-5">{user.name}</h4>
                        }
                        {
                            user.isSignedIn ? <Link onClick={()=>setUser({})} className=" btn btn-danger border-0 rounded-3 me-5" to="/">LogOut</Link>

                                : <Link className=" btn btn-warning border-0 rounded-3 me-5" to="/login">Login</Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default NavBar;