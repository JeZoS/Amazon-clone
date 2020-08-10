import React from 'react';
import {useStateValue} from "./StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct"
import SubTotal from "./SubTotal.js"

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="http://wbbands.info/wp-content/uploads/2014/09/amazon-smile-banner.jpg" alt="igga" />
            {basket?.length === 0 ? (
                <div>
                    <h1 className="checkout__title" >Your cart's empty</h1>
                </div>
            ):( <div>
                    <h1 className="checkout__title">Your Cart</h1>
                    {
                    basket.map(item=>
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                
                )}
                </div>
            )}
            </div>
            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
