import React, { Component } from 'react'
import Product from './section/product'
import Details from './section/Details'
import {Route} from "react-router-dom"
class Section extends Component {
  render() {
    return (
      <section>
        <Route path = "/product" component = {Product} exact/>
        <Route path = "/product/:id" component = {Details}/>
      </section>
    )
  }
}

export default Section
