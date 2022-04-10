import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Card from '../Card/Card';
import Header from '../Header/Header';
import NavBar from '../Shares/NavBar/NavBar'
import { reviewContext } from '../../App';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);
    const [productReview, setProductReview] = useContext(reviewContext);

    useEffect(() => {
        setProducts(fakeData)
    },[]);

    const handelClick =(product)=>{
        const newCard = [...card, product ]
        setCard(newCard);
        setProductReview(newCard);
    };
    
    return (
        <section className=" mt-2">
            <Header/>
            <NavBar/>
            <main className="container d-flex ">
                <div className="w-75 me-2  ">
                    {
                       products.map(product => <ProductDisplay
                        product={product}
                        handelClick={handelClick}
                        showButton={true}
                        key={product.key}
                        >
                        </ProductDisplay> )
                    }
                </div>

                <div className="w-25 ms-3">
                    <Card card={card}></Card>
                </div>
            </main>

        </section>
    );
};

export default Shop;