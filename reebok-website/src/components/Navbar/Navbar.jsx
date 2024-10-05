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
    const handleUserClick = () => {
        navigate("/auth"); // Navigate to the login/register page when user icon is clicked
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
                <FontAwesomeIcon icon={faUser} onClick={handleUserClick} style={{ cursor: 'pointer' }} /> {/* User Icon with Click Event */}
                <div style={{ position: 'relative' }}>
                    <FontAwesomeIcon icon={faHeart} onClick={handleWishlistClick} style={{ cursor: 'pointer' }} />
                    {wishlistCount > 0 && (
                        <span className="wishlist-count">{wishlistCount}</span>
                    )}
                </div>
                <div style={{ position: 'relative' }} onClick={handleBagClick}> 
                    <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: 'pointer' }} />
                    {bagCount > 0 && ( 
                        <span className="bag-count">{bagCount}</span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
