import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import Flights from './pages/Flights';
import Offers from './pages/Offers';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar appears on every page */}
      <Navbar />

      {/* Main content switches based on route */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>

      {/* Footer appears on every page */}
      <Footer />
    </div>
  );
}

export default App;
