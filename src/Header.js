import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider"

function Header() {
    const [{basket}] = useStateValue(); 
    return (
        <nav className="header">
            <Link to="/"><img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""  /></Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>    
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLineOne">hello</span>
                        <span className="header__optionLineTwo">Sign in</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionLineOne">Yours</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
