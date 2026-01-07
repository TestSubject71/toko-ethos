import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList'; // <--- Import this!

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Web Store</h1>
        <Routes>
          <Route path="/" element={<ProductList />} /> {/* <--- Add this Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
