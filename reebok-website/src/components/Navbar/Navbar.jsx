import React from "react";
import { useNavigate } from "react-router-dom"; 
import './Navbar.css';
import logo from '/src/assets/images/reebok_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ wishlistCount, bagCount }) => { 
    const navigate = useNavigate(); 

    const handleLogoClick = () => {
        navigate("/"); 
    };

    const handleWishlistClick = () => {
        navigate("/wishlist"); 
    };

    const handleBagClick = () => {
        navigate("/bag"); 
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
                <div style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faHeart} onClick={handleWishlistClick} style={{ cursor: 'pointer' }} />
                    {wishlistCount > 0 && (
                        <span className="wishlist-count">{wishlistCount}</span>
                    )}
                </div>
                <div style={{ position: 'relative' }} onClick={handleBagClick}> {/* Add onClick to navigate to bag */}
                    <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: 'pointer' }} />
                    {bagCount > 0 && ( // Show count if there are items in the bag
                        <span className="bag-count">{bagCount}</span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
