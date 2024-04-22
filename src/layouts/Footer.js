import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MCA 2022-2024 Project</p>
        <p>Contact: rishav83@pm.me</p>
      </div>
    </footer>
  );
}

export default Footer;
