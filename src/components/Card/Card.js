import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardItem from '../CardItem/CardItem'
import './Card.css'

class Card extends Component {

  render() {
    return (
      <div className='card'>
          <div className='card-money'>
            <p>Order summary: {(this.props.allMoney).toFixed(3)}$</p>
          </div>
        <div className='card-item-container'>
          {this.props.productsInCard.map((product) => {
            return (
              <div className='card-item' key={product.product_id + product.title + product.source + product.position}>
                <CardItem {...product} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCard: state.productsInCard,
    allMoney: state.allMoney
  }
}

export default connect(mapStateToProps)(Card);