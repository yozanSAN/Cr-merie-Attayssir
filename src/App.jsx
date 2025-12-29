import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
    return (
            <div className="min-h-screen bg-dark-900 flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/gallery" element={<Gallery />} />
                    </Routes>
                </main>
                <Footer />
            </div>
    );
}

export default App;