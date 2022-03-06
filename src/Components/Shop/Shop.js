import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Card from '../Card/Card';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);
   
    useEffect(() => {
        setProducts(fakeData)
    },[]);

    const handelClick =(product)=>{
        const newCard = [...card, product ]
        setCard(newCard)
    };
    
    return (
        <section className="container mt-2">
            <main className="d-flex">
                <div className="w-75 me-2  ">
                    {
                       products.map(product => <Product 
                        product={product}
                        handelClick={handelClick}
                        key={product.key}
                        >
                        </Product> )
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