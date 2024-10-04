import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bag.css';

const Bag = ({ bagItems, removeFromBag }) => {
  const [checkedItems, setCheckedItems] = useState(new Array(bagItems.length).fill(false)); 
  const navigate = useNavigate(); 

  const handleCheck = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index]; 
    setCheckedItems(updatedCheckedItems);
  };

  const totalAmount = bagItems.reduce((total, item, index) => {
    return checkedItems[index] ? total + parseFloat(item.price.replace('$', '')) : total;
  }, 0);

  const handleProceedToPayment = () => {
    if (totalAmount > 0) {
      navigate('/payment'); 
    }
  };

  return (
    <div className="bag-container">
      <h1>Your Shopping Bag</h1>
      {bagItems.length === 0 ? (
        <p>Your bag is empty!</p>
      ) : (
        <div>
          <ul>
            {bagItems.map((item, index) => (
              <li key={item.id}>
                <input 
                  type="checkbox" 
                  checked={checkedItems[index]} 
                  onChange={() => handleCheck(index)} 
                />
                <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '80px' }} />
                <span>{item.name} - {item.price}</span>
                <button onClick={() => removeFromBag(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          <button onClick={handleProceedToPayment} disabled={totalAmount === 0}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Bag;
