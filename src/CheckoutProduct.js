import React from 'react'
import "./checkoutProduct.css"
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,title,price,image,rating}) {
    const t=parseInt(rating)
    const [{},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(t).fill().map((_)=>(
                        <p>⭐️</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
