import React, { Component } from 'react'
import './Login.css';
import { Route } from 'react-router'
import { Routes } from 'react-router'

import Header from '../components/Header/Header'
import Card from '../components/Card/Card';
import Shop from '../components/Shop/Shop';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/card" element={<Card />}></Route>
                    <Route path='/' element={<div className='greeting-container'><h1 className='greeting'>Welcome To Global Shopping press on Shop to start</h1></div>}></Route>
                </Routes>
            </div>
        )
    }
}
