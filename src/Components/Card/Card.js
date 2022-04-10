import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const card = props.card;
    const navigate = useNavigate();
    
    const reviewClick = () =>{
        navigate("/review")
    }

    const total = card.reduce((total, product) => total + product.price, 0);

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.50;
    }
    else if (total > 0) {
        shipping = 12.55;
    }

    let vat = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(vat)).toFixed(2);

    const formatNumber = num => {
        let precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <section className="container mt-2 ms-3">
            <h5 className="text-info text-center border-bottom border-1">Order Summary</h5>

            <div className="text-start text-secondary">
                <small>Items Ordered- {card.length}</small><br />

                <small>Product Price- $ {formatNumber(total)}</small><br />

                <small>Shipping Cost- $ {shipping}</small><br />

                <small>Tax + Vat- $ {vat}</small>

                <p className="mt-2">Total Price- $ {grandTotal}</p>
            </div>

            <button onClick={reviewClick} className="btn btn-warning rounded-3">
                <FontAwesomeIcon className="me-2" icon={faRightLong} />
                Order Review
            </button>
            
        </section>
    );
};

export default Card;