import React from 'react';
import MainPage from './pages/MainPage';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LogInPage from './pages/LogInPage';

function App() {
  return (    
    <div className="App">         
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/login" element={<LogInPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
