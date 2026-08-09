import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Part1 from './pages/Part1';
import Part2 from './pages/Part2';
import Part3 from './pages/Part3';
import Part4 from './pages/Part4';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="part-1" element={<Part1 />} />
          <Route path="part-2" element={<Part2 />} />
          <Route path="part-3" element={<Part3 />} />
          <Route path="part-4" element={<Part4 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
