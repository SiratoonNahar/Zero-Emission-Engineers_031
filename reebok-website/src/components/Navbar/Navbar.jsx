import React from "react";
import { useNavigate } from "react-router-dom"; 
import './Navbar.css';
import logo from '/src/assets/images/reebok_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate(); 

    const handleLogoClick = () => {
        navigate("/"); 
    };

    const handleWishlistClick = () => {
        navigate("/wishlist"); 
    };

    return (
        <nav className="navbar">
            <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={logo} alt="Reebok Logo" />
            </div>
            <div className="nav-links">
                <ul className="nav-links">
                    <li><a href="#">WOMEN</a></li>
                    <li><a href="#">MEN</a></li>
                    <li><a href="#">KIDS</a></li>
                    <li><a href="#">CLASSICS</a></li>
                    <li><a href="#">SPORTS</a></li>
                    <li><a href="#">SALE</a></li>
                    <li><a href="#">REEBOK LTD</a></li>
                    <li><a href="#">STORIES</a></li>
                </ul>
            </div>
            <div className="nav-actions">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faHeart} onClick={handleWishlistClick} style={{ cursor: 'pointer' }} /> {/* Added onClick here */}
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </nav>
    );
};

export default Navbar;

