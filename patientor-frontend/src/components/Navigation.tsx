// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/send">Send</Link>
    </nav>
  );
};

export default Navigation;
