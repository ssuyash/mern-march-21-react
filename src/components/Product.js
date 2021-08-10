import React from 'react'

export default function Product({product, handleAddToCart}) {
    return (
        <div>
            <div className="card" >
                <img className="card-img-top" src={`https://z.nooncdn.com/products/tr:n-t_240/${product.image_key}.jpg`} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.brand}</p>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary" onClick={()=>handleAddToCart(product.offer_code)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
