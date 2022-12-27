import React, { Component } from 'react';
import "./ProductItem.css";

export default class ProductItem extends Component {
  render() {
    const { thumbnail, source, title, price, rating, link, isAdded } = this.props;
    return (
      <>
        <div className='add-button' title='Add to card'><p>{isAdded ?  "✓" : "+"}</p></div>
        <img className='product-image' src={thumbnail} alt="product" />
        <p>Source: {source}</p>
        <a href={link}>{title}</a>
        <p>{price}</p>
        Rating: {rating ? rating : "is not given" }
        <div className='product-rating'>
          <div className='product-rating-bar' style={{ width: rating * 20 + "%" }}></div>
        </div>
      </>
    )
  }
}
