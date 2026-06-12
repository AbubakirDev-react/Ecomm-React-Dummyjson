import { useEffect } from "react"
import React from 'react'
import Products,{ getProductById } from "../data/products"
import { Link } from "react-router-dom"

const liked_products = []

export default function Favourites({favourites}) {
  const products = Products();

  const likedProducts = products.filter(product=>favourites.includes(product.id))
  return (
    <div className="row">
      
        {likedProducts.map((product,index)=>(
          <div className='col-md-3 col-sm-6 p-2' key={index}>
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
                <Link className='link link-underline link-underline-opacity-0' to={`/product/${product.id}`} onClick={getProductById(product.id)}>View</Link>
                <button className='btn text-danger fs-4' onClick={()=>setFavourites(prev=>[...prev,product.id])}>{product.liked ? <i className='bi bi-heart-fill'></i>:<i className='bi bi-heart'></i>}</button>
                <button className='btn fs-4 text-warning'><i className='bi bi-cart-plus'></i></button>
            </div>
            </div>
        </div>
    </div>
        ))}
     
    </div>
  )
}
