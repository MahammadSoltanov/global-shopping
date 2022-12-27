import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProductsNav.css';
import changeProductsAction from '../../redux/actions/changeProducts'; 

class ProductsNav extends Component {
  render() {
    return (
      <div className='products-nav'>
        <div className='products-nav-item' onClick={(e) => this.props.changeProductsList(e.target.innerHTML)}>Computers</div>
        <div className='products-nav-item' onClick={(e) => this.props.changeProductsList(e.target.innerHTML)}>Headphones</div>
        <div className='products-nav-item' onClick={(e) => this.props.changeProductsList(e.target.innerHTML)}>Phones</div>
        <div className='products-nav-item' onClick={(e) => this.props.changeProductsList(e.target.innerHTML)}>TVs</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeProductsList: (productCategory) => {
      console.log("Dispatched CHANGE_PRODUCTS action");
      dispatch(changeProductsAction(productCategory));
  }
});

export default connect(null, mapDispatchToProps)(ProductsNav);