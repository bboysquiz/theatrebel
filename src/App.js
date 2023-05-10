import React from 'react';
import Main from './pages/Main'
import Compositions from './pages/Compositions'
import Festivals from './pages/Festivals'
import Union from './pages/Union';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route path='Compositions' element={<Compositions />} />
        <Route path='Festivals' element={<Festivals />} />
        <Route path='Union/:id' element={<Union />} />
      </Routes>
    </div>
  );
}

export default App;
