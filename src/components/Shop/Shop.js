import React, { Component } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import Products from '../Products/Products';
import './Shop.css';
import ProductsNav from '../ProductsNav/ProductsNav';

export default class Shop extends Component {
  render() {
    return (
      <div className='shop-main-container'>
        <ProductsNav/>
        <Products />
      </div>
    )
  }
}
