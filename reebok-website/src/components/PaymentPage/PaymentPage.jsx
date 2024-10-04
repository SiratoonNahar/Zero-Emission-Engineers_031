// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PaymentPage.css';  

// const PaymentPage = ({ bagItems, totalAmount, clearBag }) => {
//   const navigate = useNavigate(); 

//   const handlePayment = (event) => {
//     event.preventDefault(); 
//     alert('Payment processed successfully!'); 
//     clearBag([]); 
//     navigate('/'); 
//   };

//   return (
//     <div className="payment-container">  
//       <h1>Payment Page</h1>
//       {bagItems.length === 0 ? (
//         <p>Your bag is empty!</p>
//       ) : (
//         <div>
//           <h2>Order Summary</h2>
//           <ul>
//             {bagItems.map(item => (
//               <li key={item.id}>
//                 {item.name} - {item.price}
//               </li>
//             ))}
//           </ul>
//           <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
//           <h3>Payment Details</h3>
//           <form onSubmit={handlePayment}>
//             <label>
//               Card Number:
//               <input type="text" required />
//             </label>
//             <label>
//               Expiration Date:
//               <input type="text" required />
//             </label>
//             <label>
//               CVV:
//               <input type="text" required />
//             </label>
//             <button type="submit">Pay Now</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './PaymentPage.css';

// const PaymentPage = ({ bagItems, totalAmount, clearBag }) => {
//   const navigate = useNavigate();

//   const handlePayment = (event) => {
//     event.preventDefault();
//     alert('Payment processed successfully!');
//     clearBag([]);
//     navigate('/');
//   };

//   return (
//     <div className="payment-container">
//       <h1>Payment Page</h1>
//       {bagItems.length === 0 ? (
//         <p>Your bag is empty!</p>
//       ) : (
//         <div>
//           <div className="order-summary">
//             <h2>Order Summary</h2>
//             <ul>
//               {bagItems.map(item => (
//                 <li key={item.id}>
//                   {item.name} - {item.price}
//                 </li>
//               ))}
//             </ul>
//             <h3 className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</h3>
//           </div>
          
//           <h3>Payment Details</h3>
//           <form onSubmit={handlePayment}>
//             <label>
//               Card Number:
//               <input type="text" required />
//             </label>
//             <label>
//               Expiration Date:
//               <input type="text" required />
//             </label>
//             <label>
//               CVV:
//               <input type="text" required />
//             </label>
//             <button type="submit">Pay Now</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentPage;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';  

const PaymentPage = ({ bagItems, totalAmount, clearBag }) => {
  const navigate = useNavigate(); 

  const handlePayment = (event) => {
    event.preventDefault(); 
    alert('Payment processed successfully!'); 
    clearBag([]); 
    navigate('/'); 
  };

  return (
    <div className="payment-container">
      <h1 className="payment-header">Payment Page</h1>
      {bagItems.length === 0 ? (
        <p>Your bag is empty!</p>
      ) : (
        <div>
          <div className="order-summary">
            <h2 className="order-summary-header">Order Summary</h2>
            <ul className="payment-summary-list">
              {bagItems.map(item => (
                <li key={item.id} className="payment-summary-list-item">
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
            <h3 className="total-amount-header">Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
          
          <h3 className="total-amount-header">Payment Details</h3>
          <form onSubmit={handlePayment}>
            <label>
              Card Number:
              <input type="text" required />
            </label>
            <label>
              Expiration Date:
              <input type="text" required />
            </label>
            <label>
              CVV:
              <input type="text" required />
            </label>
            <button type="submit">Pay Now</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
