import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SwapPage from './pages/Swap';
import DashboardPage from './pages/Dashboard';
import AssetPage from './pages/Asset';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/swap' element={<SwapPage />} />
        <Route path='/asset' element={<AssetPage />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
