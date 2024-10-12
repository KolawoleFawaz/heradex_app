import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SwapPage from './pages/Swap';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/swap" element={<SwapPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
