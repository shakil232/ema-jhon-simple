import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { reviewContext } from '../../App';
import Card from '../Card/Card';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import NavBar from '../Shares/NavBar/NavBar';


const OrderReview = () => {
    const [productReview, setProductReview] = useContext(reviewContext);

    return (
        <section className="">
            <NavBar />

            <main className="container d-flex ">
            <div className="mt-2">
                    {
                        productReview.length === 0 &&
                        <Spinner className="text-center  fs-3" animation="border" variant="success" />
                    }
                </div>

                <div className="w-75 me-2  ">
                    {
                        productReview.map(product =>
                            <ProductDisplay product={product}></ProductDisplay>
                        )
                    }
                   
                </div>

                <div className="w-25 ms-3">
                    <Link to="/shipment"
                    className="btn btn-warning border-0 rounded-3"
                    >order place</Link>
                </div>
            </main>
        </section>
    );
};

export default OrderReview;