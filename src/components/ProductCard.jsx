import React from 'react'
import '../css/ProductCard.css'
import getProductById from '../data/products'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div>
        <div className="card-header">
            <img src={product.thumbnail} alt="" />
        </div>
        <div className="card-content">
            <h4>{product.title}</h4>
            <h5 style={{color:'green'}}>${product.price}</h5>
            <p>{product.brand} <i class="bi bi-patch-check-fill" style={{color:'blue'}}></i></p>
        </div>
        <div className="card-actions">
            <Link to={`/product/${product.id}`} onClick={getProductById(product.id)}>View</Link>
            <button className='heart'><i className='bi bi-heart'></i></button>
            <button className='cart'><i className='bi bi-cart-plus'></i></button>
        </div>
    </div>
  )
}
