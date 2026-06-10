import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products';
import '../css/product-detail.css'

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
      <div className='product-detail' key={product.id}>
      <div className="container">
        <div className="left">
          <div className='images-menu'>
            {product.images.map((img,index)=>(
              <button className='img-btn' onClick={()=>setImage(index)}>
                {console.log(product.images[img])}
                <img src={img} height={100}  width={100} alt="" />
              </button>
            ))}
          </div>
          <img src={product.images[image]} alt="" className='image'/>
        </div>
        <div className="right">
          <div className="col-lg-8">
            <h1 className='product-title'>{product.title}</h1>
            
            <p className='warranty'>{product.warrantyInformation}</p>
            <p className='shipping'>{product.shippingInformation}</p>
            <p className='avaiblityStatus'>{product.availabilityStatus}</p>
            <p className='returnPolicy'>{product.returnPolicy}</p>
            <p className='product-description'>{product.description}</p>
            <p className='product-tags'>{product.tags.map((tag)=>(
              <span>{tag}</span>
            ))}</p>

            <div className="reviews">
              {product.reviews.map((review,index)=>
              <div className="review" key={index}>
                <h3 className='reviewerName'>{review.reviewerName}</h3>
                <i className='reviewerEmail'>{review.reviewerEmail}</i>
                <h4 className='reviewRating'>{review.rating}/5</h4>
                <p className='reviewComment'>{review.comment}</p>
                <small className='reviewDate'>{review.date}</small>
              </div>
              )}
            </div>
            </div>
          <div className="col-lg-4">
            <h3 className='product-brand'>{product.brand}</h3>
            <p className='stock'>In stock {product.stock}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
