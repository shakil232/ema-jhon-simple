import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const handelClick = props.handelClick;
    const { name, img, seller, price, star, stock } = props.product;
    return (
        <section>
            <main className="row border-bottom border-right border-2 text-center border-end">
                <div className="col-md-4 col-sm-12  p-2">
                    <img className='w-75' src={img} alt="" />
                </div>

                <div className="col-md-8 col-sm-12 p-2">
                    <h5 className="fs-6 text-primary">{name}</h5>

                    <div className="d-flex align-content-center justify-content-center text-secondary">
                        <div className="text-start">
                            <small>By: {seller}</small><br />
                            <small>$ {price}</small><br />
                            <small>only {stock} left in stock</small>
                        </div>

                        <div className="text-end ms-5">
                            <small>star: {star}</small><br />
                            <small>Features</small>
                        </div>
                    </div>

                    <button onClick={()=>handelClick(props.product)}
                    className="btn btn-warning rounded-3 mt-3">
                    <FontAwesomeIcon className="me-2" icon={faPlus} />
                        Add to cart</button>
                </div>
            </main>
        </section>
    );
};

export default Product;