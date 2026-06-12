import React from 'react';
import { Link } from 'react-router-dom';
import { useFavourite } from '../context/favouriteContext';
import { useCart } from '../context/cartContext';

export default function ProductCard({product}) {
    const { addToFavourites } = useFavourite();
    const { addToCart } = useCart();

    return (
        <div className='col-md-3 col-sm-6 p-2'>
            <div className="card h-100">
                <div className="card-header">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="card-body">
                    <h5>{product.title}</h5>
                    <p>
                        <span className='newPrice text-success'>${product.price}</span>
                        <span className="oldPrice ms-2 text-secondary text-decoration-line-through">
                            ${Math.floor(product.price + product.price/100 * product.discountPercentage)}
                        </span>
                        <span className='discount ms-2 text-danger'>
                            -{Math.floor(product.discountPercentage)}%
                        </span>   
                    </p>
                    <p className=''>
                        {product.brand} 
                        <i className="bi bi-patch-check-fill" style={{color:'blue'}}></i>
                    </p>
                    <div className="card-actions d-flex justify-content-evenly align-items-center">
                        <Link className='btn btn-sm btn-outline-primary' to={`/product/${product.id}`}>
                            View
                        </Link>
                        <button 
                            className='btn btn-sm btn-outline-danger' 
                            onClick={() => addToFavourites(product.id)}
                        >
                            Add to favourites
                        </button>
                        <button 
                            className='btn btn-sm btn-outline-warning' 
                            onClick={() => addToCart(product.id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}