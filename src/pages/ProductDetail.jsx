import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';

export default function ProductDetail({productId}) {
  const [product,setProduct] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate();
  const [image,setImage] = useState(0);
  useEffect(()=>{
    const foundProduct = getProductById(id);
    if(!foundProduct){
      navigate('/')
    }
    setProduct(foundProduct)
  },[id])
  if(!product){
    return <h1>Loading...</h1>
  }
  return (
      <div className="px-5 row"  key={product.id} style={{width:'100%'}}>
        <div className="col-md-6 align-items-center row p-3">
          <div className='d-flex flex-column col-3'>
            {product.images.map((img,index)=>(
              <button className='btn my-2' onClick={()=>setImage(index)}>
                {console.log(product.images[img])}
                <img src={img} height={100} className='img-fluid'  width={100} alt="" />
              </button>
            ))}
          </div>
          <img src={product.images[image]} alt="" className='img-fluid col-9 p-3'/>
        </div>
        <div className="col-md-6 row p-3">
          <div className="col-md-12 p-3">
            <h3 className='product-title'>{product.title} <h5 className='product-brand text-primary'>{product.brand} <i className="bi bi-patch-check-fill"></i> </h5></h3>
            <p className='shipping'></p>
            <p className='product-description'>{product.description}</p>
            </div>
          <div className="col-md-12 p-3">
            <div className="card p-3">
            <p className='text-danger d-flex justify-content-between'>In stock <span>{product.stock}</span></p>
            <p className='d-flex justify-content-between'>Shipping Information <span>{product.shippingInformation}</span></p>
            <p className='d-flex justify-content-between'>Warranty <span>{product.warrantyInformation}</span></p>
            {product.returnPolicy!=='No return policy'?(<p className='text-success d-flex justify-content-between'>Return Policy <span>{product.returnPolicy}</span></p>):(
              <p className='text-danger d-flex justify-content-between'>Return Policy <span>{product.returnPolicy}</span></p>
            )}
            </div>
            <div className="d-flex p-2">
              <button className='btn btn-outline-danger m-2'><i className='bi bi-heart'></i> Add to Favourites</button>
              <button className='btn btn-outline-warning m-2'><i className='bi bi-cart-plus'></i> Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h1 className='text-center'>Reviews</h1>
              {product.reviews.map((review,index)=>
              <div className="card p-2 m-2" key={index}>
                <h3 className='reviewerName'>{review.reviewerName}</h3>
                <i className='reviewerEmail'>{review.reviewerEmail}</i>
                <h4 className='reviewRating'>{review.rating}/5</h4>
                <p className='reviewComment'>{review.comment}</p>
                <small className='reviewDate'>{review.date}</small>
              </div>
              )}
            </div>
      </div>
  )
}
