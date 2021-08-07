import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {DataConText} from '../Context'
import '../Css/detail.css'
class Details extends Component {
  static contextType = DataConText;
  state = {
    product : [
      // mang rong
      //luu gia tri click
    ]
  }
  getProduct = () =>{
    if(this.props.match.params.id){
      const res = this.context.products;
      const data = res.filter(item =>{
        return item._id === this.props.match.params.id
      })
      this.setState({product : data})
    }
  };

  componentDidMount(){
    this.getProduct();
  }
  render() {
    const {product} = this.state;
    return (
      <>
      {
        product.map(item =>(
          <div className="details" key = {item._id}>
                <img src={item.src} alt="" />
                <div className="box">
              <div className="row">
                <h2> {item.title}</h2>
                <span>${item.price}</span>
                </div>
                <p className= "clo">
                {
                  item.color.map((colors,index) =>(
                    <button key = {index} style={{background:colors}} ></button>
                  ))
                }
                </p>
                <p>{item.description}</p>
                <Link className="cart" to= "/cart">Add to cart</Link>
                </div>
          </div>
        ))
      }
      </>
    )
  }
}

export default Details
