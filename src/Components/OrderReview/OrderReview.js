import React, { useContext } from 'react';
import { reviewContext } from '../../App';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import NavBar from '../Shares/NavBar/NavBar';


const OrderReview = () => {
    const [productReview, setProductReview] = useContext(reviewContext);
    return (
        <section className="">
            <NavBar/>
            
            <div className="container mt-5">
                {
                    productReview.map(product => 
                        <ProductDisplay product={product}></ProductDisplay>
                        )
                }
            </div>
        </section>
    );
};

export default OrderReview;