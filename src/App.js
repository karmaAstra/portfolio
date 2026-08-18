import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import pages from the pages folder
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Modern Navigation Bar */}
        <nav style={styles.nav}>
          <div style={styles.brand}>
            <span style={styles.brandIcon}>🚀</span> MyBrand
          </div>
          <div style={styles.navLinks}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        </nav>

        {/* Route Definitions */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Modern styles for the layout and navigation bar
const styles = {
  appContainer: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#111827',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  brandIcon: {
    fontSize: '18px',
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  },
  link: {
    color: '#4b5563',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '650',
    transition: 'color 0.2s ease',
  },
  content: {
    // Optional wrapper if you need top spacing below sticky nav
  }
};

export default App;