import { useEffect } from "react"
import React from 'react'
import Products,{ getProductById } from "../data/products"
import { Link } from "react-router-dom"
import { useFavourite } from "../context/favouriteContext"


export default function Favourites({favourites}) {
  const products = Products();
  const { getFIWP,rmFromFavourites } = useFavourite();

  const fItems = getFIWP();
  return (
    <div className="row">
      <div className="col-12 row p-5">
        {fItems.map((item,index)=>(
            <div className="row p-3" key={index}>
                <div className="col-md-2 col-sm-6">
                    <img src={item.product.thumbnail} className="img-fluid img-thumbnail" alt="" />
                </div>
                <div className="col-md-10 col-sm-6">
                    <div className="d-flex align-items-center">
                        <h3>{item.product.title}</h3>
                        <h5 className="text-secondary mx-2">{item.product.brand}</h5>
                    </div>
                    <div className="d-flex">
                        <h4 className="text-success">${item.product.price}</h4>
                        <del className="text-danger mx-2">${Math.floor(item.product.price + item.product.price/100*item.product.discountPercentage)}</del>
                    </div>
                    <p>Description: {item.product.description}</p>
                    <p>Category: {item.product.category}</p>
                    <div className="d-flex gap-2">
                        <Link to={`/product/${item.product.id}`} className="btn btn-outline-primary">View</Link>
                        <button className="btn btn-outline-danger" onClick={()=>rmFromFavourites(item.product.id)}>Remove from Favourites</button>
                        <button className="btn btn-outline-warning">Add to Cart</button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}
