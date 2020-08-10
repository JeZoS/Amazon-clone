import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';


function Product({id,title,price,image,rating}) { 
    var t = parseInt(rating);
    const [{},dispatch]=useStateValue();
    
    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            payload:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                    <p>{title}</p>
                    <p className="product__price">
                            <small>$</small>
                            <strong>{price}</strong>
                    </p>  
                    <div className="product__rating">
                        {
                            Array(t).fill().map((_)=>(
                                <p>⭐️</p>
                            ))
                        }
                    </div>
            </div>
           <img className="product__image" src={image} alt="" />
           <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}


export default Product
