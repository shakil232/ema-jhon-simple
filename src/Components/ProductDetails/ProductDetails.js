import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import NavBar from '../Shares/NavBar/NavBar';


const ProductDetails = () => {
    const {productId} = useParams();
    const product = fakeData.find(pd => pd.key === productId);
    return (
        <section className="">
            <NavBar/>
            
            <div className="container mt-5">
                <ProductDisplay
                showButton={false}
                 product={product} 
                 />
            </div>
        </section>
    );
};

export default ProductDetails;