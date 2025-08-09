// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { incrementQty,decrementQty,removeFromCart } from './redux/actions/cartActions';

// function Cart() {
//     const dispatch = useDispatch();
//     const { cartItems, totalAmount } = useSelector(state => state.cart);

//     return (
//         <div className="container my-5">
//             <h3 className="text-center mb-4">Shopping Cart</h3>

//             {cartItems.length === 0 ? (
//                 <p className="text-center">Your cart is empty.</p>
//             ) : (
//                 <table className="table table-bordered align-middle">
//                     <thead className="table-light">
//                         <tr>
//                             <th>Image</th>
//                             <th>Product</th>
//                             <th style={{ width: "150px" }}>Quantity</th>
//                             <th>Price</th>
//                             <th>Remove</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cartItems.map(item => (
//                             <tr key={item.id}>
//                                 <td>
//                                     <img
//                                         src={item.image}
//                                         alt={item.title}
//                                         style={{ width: '60px', height: '60px', objectFit: 'contain' }}
//                                     />
//                                 </td>
//                                 <td>{item.title}</td>
//                                 <td>
//                                     <div className="d-flex align-items-center justify-content-between">
//                                         <button
//                                             className="btn btn-sm btn-outline-secondary"
//                                             onClick={() => dispatch(decrementQty(item.id))}
//                                             disabled={item.quantity === 1}
//                                         >-</button>
//                                         <span className="mx-2">{item.quantity}</span>
//                                         <button
//                                             className="btn btn-sm btn-outline-secondary"
//                                             onClick={() => dispatch(incrementQty(item.id))}
//                                             disabled={item.quantity === 5}
//                                         >+</button>
//                                     </div>
//                                 </td>
//                                 <td>₹{item.price * item.quantity}</td>
//                                 <td>
//                                     <button
//                                         className="btn btn-sm btn-danger"
//                                         onClick={() => dispatch(removeFromCart(item.id))}
//                                     >Remove</button>
//                                 </td>
//                             </tr>
//                         ))}
//                         <tr>
//                             <td colSpan="3" className="text-end fw-bold">Total:</td>
//                             <td colSpan="2" className="fw-bold text-danger">₹{totalAmount.toFixed(2)}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Cart;
 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart } from './redux/actions/cartActions';

function Cart() {
    const dispatch = useDispatch();
    const { cartItems, totalAmount } = useSelector(state => state.cart);

    return (
        <div className="container my-5">
            <h3 className="text-center mb-4">Shopping Cart</h3>

            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="d-flex flex-column gap-3">
                        {cartItems.map(item => (
                            <div
                                key={item.id}
                                className="card p-3 shadow-sm"
                                style={{ borderRadius: '10px' }}
                            >
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                                    />
                                    <div className="flex-grow-1 mx-3">
                                        <h5 className="mb-1">{item.title}</h5>
                                        <p className="mb-0 fw-bold text-danger">₹{item.price * item.quantity}</p>
                                    </div>
                                    <div className="d-flex align-items-center mx-3">
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => dispatch(decrementQty(item.id))}
                                            disabled={item.quantity === 1}
                                        >-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => dispatch(incrementQty(item.id))}
                                            disabled={item.quantity === 5}
                                        >+</button>
                                    </div>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-end mt-4">
                        <h4>Total: <span className="text-danger">₹{totalAmount.toFixed(2)}</span></h4>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;

