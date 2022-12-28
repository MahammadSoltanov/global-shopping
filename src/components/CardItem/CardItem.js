import React, { Component } from 'react'
import { connect } from 'react-redux';
import decrementAmountAction from '../../redux/actions/decrementAmount';
import deleteFromCardAction from '../../redux/actions/deleteFromCard';
import incrementAmountAction from '../../redux/actions/incrementAmount';
import updateIsAddedPropertyAction from '../../redux/actions/updateIsAddedProperty';
import './CardItem.css'

class CardItem extends Component {
    render() {
        const { thumbnail, source, title, price, rating, link, isAdded, amount, extracted_price, reviews, delivery, product_id, position } = this.props;
        return (
            <div className='card-item-container'>
                <div className='card-item-top'>
                    Source: {source}
                </div>
                <div className='card-item-bottom'>
                    <img className='card-item-img' src={thumbnail}></img>
                    <div className='card-item-info'>
                        <a href={link}>{title}</a>
                        <p>{rating}★</p>
                        <p>Delivery: {delivery}</p>
                    </div>
                    <div className='card-item-bottom-right'>
                        <div className='card-item-counter'>
                            <button className='card-item-minus' onClick={() => this.props.decrementAmount(product_id + source + title + position)}>-</button>
                            <p>{amount}</p>
                            <button className='card-item-plus' onClick={() => this.props.incrementAmount(product_id + source + title + position)}>+</button>
                        </div>
                        <div className='card-item-summ'>
                            {extracted_price * amount}$
                        </div>
                        <button className='card-item-delete' onClick={() => this.props.deleteFromCard(product_id + source + title + position)}></button>
                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    incrementAmount: (id) => {
        console.log("Dispatched INCREMENT_AMOUNT action")
        dispatch(incrementAmountAction(id));
    },

    decrementAmount: (id) => {
        console.log("Dispatched DECREMENT_AMOUNT action")
        dispatch(decrementAmountAction(id))
    },

    deleteFromCard: (id) => {
        console.log("Dispatched DELETE_FROM_CARD action")
        dispatch(deleteFromCardAction(id));
        dispatch(updateIsAddedPropertyAction(id));
    }
})

export default connect(null, mapDispatchToProps)(CardItem);