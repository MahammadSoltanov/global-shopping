import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardItem from '../CardItem/CardItem'
import './Card.css'

class Card extends Component {

  render() {
    return (
      <>
        <div className='card-item-container'>
          {this.props.productsInCard.map((product) => {
            return (
              <div className='card-item' key={product.product_id + product.title + product.source + product.position}>
                <CardItem {...product} />
              </div>
            )
          })}
          <div></div>
        </div>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCard: state.productsInCard
  }
}

export default connect(mapStateToProps)(Card);