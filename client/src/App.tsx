import React from 'react';
import { Routes, Route } from 'react-router-dom';
// styles
import './App.css';

// pages/route
import { About, Home } from './pages';

// components
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  );
}

export default App;
