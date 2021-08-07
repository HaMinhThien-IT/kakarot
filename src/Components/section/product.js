import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataConText } from '../Context'
import '../Css/product.css'
export class Product extends Component {
    static contextType = DataConText;
    render() {
        const { products } = this.context;
        return (
            <div className="product">
                {
                    products.map(product =>(
                        <div className="cart" key={product._id}>
                            <Link to = {`/product/${product._id}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to = {`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Product
