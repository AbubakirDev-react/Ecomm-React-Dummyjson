import React from 'react'
import getProductById from '../data/products'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div className='col-md-3 col-sm-6 p-2'>
        <div className="card h-100">
            <div className="card-header">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="card-body">
                <h5>{product.title}</h5>
            
                <p>
                    <span className='newPrice text-success'>${product.price}</span>
                    <span className="oldPrice ms-2 text-secondary text-decoration-line-through">${Math.floor(product.price + product.price/100*product.discountPercentage)}</span>
                    <span className='discount ms-2 text-danger'>-{Math.floor(product.discountPercentage)}%</span>   
                </p>
                <p className=''>{product.brand} <i class="bi bi-patch-check-fill" style={{color:'blue'}}></i></p>
            <div className="card-actions d-flex justify-content-evenly align-items-center">
                <Link className='link link-underline link-underline-opacity-0' to={`/product/${product.id}`} onClick={getProductById(product.id)}>View</Link>
                <button className='btn text-danger fs-4'><i className='bi bi-heart'></i></button>
                <button className='btn fs-4 text-warning'><i className='bi bi-cart-plus'></i></button>
            </div>
            </div>
        </div>
    </div>
  )
}
