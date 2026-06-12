import React,{useState,useEffect} from 'react'
import getProductById from '../data/products'
import { Link } from 'react-router-dom'
import { useFavourite } from '../context/favouriteContext'


export default function ProductCard({product}) {
    const {addToFavourites} = useFavourite();
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
                <p className=''>{product.brand} <i className="bi bi-patch-check-fill" style={{color:'blue'}}></i></p>
            <div className="card-actions d-flex justify-content-evenly align-items-center">
                <Link className='btn btn-sm btn-outline-primary' to={`/product/${product.id}`} onClick={getProductById(product.id)}>View</Link>
                <button className='btn btn-sm btn-outline-danger' onClick={()=>addToFavourites(product.id)}>Add to favourites</button>
                <button className='btn btn-sm btn-outline-warning'>Add to Cart</button>
            </div>
            </div>
        </div>
    </div>
  )
}
