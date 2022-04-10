import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
// fontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGooglePlus, faFacebook } from '@fortawesome/free-brands-svg-icons'
// firebase 
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
} from "firebase/auth";
import firebaseConfig from './firebase.config';

// bootstrap 
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// components 
import NavBar from '../Shares/NavBar/NavBar';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useContext(userContext);
    // firebase-auth
    const auth = getAuth();

    //  all-provider 
    const googleProvider = new GoogleAuthProvider();

    //   signIn-With-Google 
    const handelGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const { displayName, email, photoURL, } = res.user;
                const signInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    error: '',
                    success: true,
                    photoUrl: photoURL
                }
                setUser(signInUser);
            })
            .catch(err => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                setUser(newUserInfo);
            });

    };

    //   signIn-With-Facebook 
    const handelFacebookSignIn = () => {
        console.log('sign in')
    };
    //   signIn-With-Github 
    const handelGithubSignIn = () => {
        console.log('sign in')
    };

    // signOut 
    const handelSignOut = () => {
        signOut(auth)
            .then(res => {
                const signInUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    error: '',
                    success: true,
                    photoUrl: ''
                }
                setUser(signInUser);
            })
            .catch(err => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = err.message;
                setUser(newUserInfo);
            });
    }
    // handelBlur 
    const handelBlur = (e) => {
        console.log(e)
    }

    // fromHandelSubmit 
    const handelSubmit = (e) => {
        console.log(e)
    }
    return (
        <section className=' mb-5 pb-5'>
            <NavBar/>
            <div className="text-center ">
                <h4>name: {user.name}</h4>
                <p>email: {user.email}</p>
            </div>

            {/* error-handel  */}
            <div className=" mt-2 text-center ">
                <h2 className="text-danger">{user.error}</h2>
                {
                    user.success && <h2 className="text-success">user LoggedIn successfully</h2>
                    // user.success && <h2 className="text-success">user {newUser ? 'Created' : 'LoggedIn'} successfully</h2>
                }
            </div>

            {/* SignUp-Form  */}
            { newUser ?
                <div className="row ">
                    <div className="col-md-4 m-auto">
                        <div className=" p-4 border shadow-lg rounded-3">
                            <h4 className="text-primary text-center">Create an Account</h4>
                            <Form onSubmit={handelSubmit} >
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <label htmlFor="Name"></label>
                                    <input onBlur={handelBlur} className="form-control" type="text" name="name" placeholder="Your Name" required />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <label htmlFor="Email Address"></label>
                                    <input onBlur={handelBlur} className="form-control" type="email" name="email" placeholder="Your Email" required />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <label htmlFor="Password"></label>
                                    <input onBlur={handelBlur} className="form-control" type="password" name="password" placeholder="Your Password" required />
                                </Form.Group>

                                <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                                    <input className="btn btn-success border-0 rounded-3 form-control" type="submit" value="Create Account" />
                                </Form.Group>

                                <div className="mt-3 text-center">
                                    <p className="text-secondary">Already have an account?
                                <Link onClick={() => setNewUser(false)} to="#" className="ms-2 text-success fs-5">Login</Link>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div> :


                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className=" p-4 border shadow-lg rounded-3">
                            <h2 className="text-info text-center">Login</h2>
                            <Form onSubmit={handelSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <label htmlFor="Email Address"></label>
                                    <input onBlur={handelBlur} className="form-control" type="email" name="email" placeholder="Your Email" required />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <label htmlFor="Password"></label>
                                    <input onBlur={handelBlur} className="form-control" type="password" name="password" placeholder="Your Password" required />
                                </Form.Group>

                                <div className="d-flex justify-content-between align-content-center mt-4">
                                    <div>
                                        <p className="text-secondary">
                                            <Link onClick={() => setNewUser(true)} to="#" className="ms-2 text-primary fs-6">Create an account?</Link>
                                        </p>
                                    </div>
                                    <div>
                                        <small>
                                            <Link to="/" className="text-danger">Forgot Password</Link >
                                        </small>
                                    </div>
                                </div>

                                <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                                    <input className="btn btn-success border-0 rounded-3 form-control" type="submit" value="Login" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>}

            {/* Continue-Section  */}
            <div className="mt-3 p-3">
                <div className="text-center">
                    <h4 className="text-warning">Or</h4>
                    <h3 className="text-info">Continue With</h3>
                </div>

                <div className="mt-3  d-flex justify-content-center align-content-center m-auto">
                    <FontAwesomeIcon onClick={handelGoogleSignIn} className="btn text-warning fs-3" icon={faGooglePlus} />

                    <FontAwesomeIcon onClick={handelFacebookSignIn} className="btn text-primary fs-3 ms-2" icon={faFacebook} />

                    <FontAwesomeIcon onClick={handelGithubSignIn} className="btn text-Secondary  fs-3 ms-2" icon={faGithub} />
                </div>
            </div>

        </section >
    );
};

export default Login;