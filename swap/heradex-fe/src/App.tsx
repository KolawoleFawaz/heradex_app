import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
// import Dashboard from './components/dashboard';
import Swap from './components/swap';
function App() {
  return (
    <div className='main'>
      <Sidebar className='sidebar'/>
      {/* <Dashboard className='dashboard'/> */}
      <Swap className="swap"/>

    </div>
  );
}

export default App;
