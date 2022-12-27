import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import './Products.css';

class Products extends Component {
  render() {
    return (
      <div className='products-container'>
        {this.props.products.map((product) => {
          return (
            <div className='product-item' key={product.product_id + product.title + product.source}>
              <ProductItem {...product} />
            </div>)
        }
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.currentProducts
  }
}

export default connect(mapStateToProps)(Products);
