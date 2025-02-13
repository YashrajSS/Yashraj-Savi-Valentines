import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Wybmv from './pages/Wybmv';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Ballu-The-Princess" element={<Home />} />
        <Route path="/WillYouBeMyValentine" element={<Wybmv />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
