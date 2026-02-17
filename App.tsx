import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Home } from './pages/Home';
import { Intake } from './pages/Intake';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-navy-900 text-white selection:bg-accent selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intake" element={<Intake />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
