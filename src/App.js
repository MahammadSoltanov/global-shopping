import React from 'react';
import MainPage from './pages/MainPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import Shop from './components/Shop/Shop';
import Card from './components/Card/Card';
import UserProfile from './pages/UserProfile';

function App() {
  return (    
    <div className="App">         
      <Routes>
        <Route exact path="/main" element={<MainPage/>}>
          <Route path="/main/shop" element={<Shop />}></Route>
          <Route path="/main/card" element={<Card />}></Route>
        </Route>
        <Route path="/" element={<LogInPage/>}></Route>
        <Route path="/userprofile" element={<UserProfile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
