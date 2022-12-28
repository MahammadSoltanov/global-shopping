import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToCardAction from '../../redux/actions/addToCard';
import updateIsAddedPropertyAction from '../../redux/actions/updateIsAddedProperty';
import "./ProductItem.css";

class ProductItem extends Component {
  render() {
    const { thumbnail, source, title, price, rating, link, isAdded, amount, reviews, delivery } = this.props;
    return (
      <>
        <button className='add-button' title='Add to card' disabled={isAdded} onClick={() => this.props.addToCard(this.props)}><p>{isAdded ? "✓" : "+"}</p></button>
        <img className='product-image' src={thumbnail} alt="product" />
        <p>Source: {source}</p>
        <a href={link}>{title}</a>
        <p>{price}</p>
        Rating: {rating ? rating : "is not given"}
        <div className='product-rating'>
          <div className='product-rating-bar' style={{ width: rating * 20 + "%" }}></div>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCard: (product) => {
    console.log("Dispatched ADD_TO_CARD action");
    dispatch(addToCardAction(product))
    const id = product.product_id + product.source + product.title + product.position;
    console.log("Dispatched UPDATE_IS_ADDED_PROPERTY action");
    dispatch(updateIsAddedPropertyAction(id))
  }
})

export default connect(null, mapDispatchToProps)(ProductItem);