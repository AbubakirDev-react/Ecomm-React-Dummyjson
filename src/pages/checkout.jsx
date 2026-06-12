import React from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const { getCIWP, getCartTotal, updateQuantity, clearCart, removeFromCart } = useCart();
    const cartItems = getCIWP();
    const total = getCartTotal();
    
    console.log(cartItems);
    
    function placeOrder() {
        alert("Successful Order!");
        clearCart(); 
    }
    
    if (cartItems.length === 0) {
        return (
            <div className="text-center p-5">
                <h2>Your cart is Empty</h2>
                <Link to="/" className="btn btn-primary">Home Page</Link>
            </div>
        );
    }
    
    return (
        <div className='row p-5'>
            <div className="col-md-12 row">
                <div className="col-md-9 row">
                    {cartItems.map((item) => (
                        <div className="col-12 row p-3" key={item.id}> 
                            <div className="col-3">
                                <img src={item.product.thumbnail} className='img-thumbnail img-fluid' alt={item.product.title} />
                            </div>
                            <div className="col-9">
                                <h4>{item.product.title}</h4>
                                <h4 className='text-success'>${item.product.price}</h4>
                                <div className="actions d-flex gap-2">
                                    <Link to={`/product/${item.product.id}`} className='btn btn-primary'>View</Link>
                                    <button 
                                        className='btn btn-outline-danger' 
                                        onClick={() => removeFromCart(item.id)}  
                                    >
                                        <i className='bi bi-trash-fill'></i> Delete
                                    </button>
                                </div>
                                <div className="btn-group my-3">
                                    <button 
                                        className='btn btn-warning fs-4 py-2 px-4' 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >-</button>
                                    <button className='btn fs-4 py-2 px-4'>{item.quantity}</button>
                                    <button 
                                        className='btn btn-success fs-4 py-2 px-4' 
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-3 p-3">
                    <div className="card p-3"> {}
                        <h3>Total:</h3>
                        {cartItems.map((item) => (
                            <div key={item.id}> {}
                                <p>
                                    {item.product.title} 
                                    <span className='text-primary'> x </span> 
                                    {item.quantity} 
                                    <span className='text-primary'> = </span>
                                    ${(item.product.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                        <hr />
                        <h4>To pay: ${total.toFixed(2)}</h4>
                        <button className='btn btn-success' onClick={placeOrder}>Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}