import React, { Component } from 'react'
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
                    <Route path="/" element={<Shop />}></Route>
                    <Route path="/card" element={<Card />}></Route>
                </Routes>
            </div>
        )
    }
}
