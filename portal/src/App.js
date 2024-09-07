import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Mapa from './Pages/Mapa/Mapa';
import Servicos from './Pages/Servicos/Servicos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/Servicos" element={<Servicos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
