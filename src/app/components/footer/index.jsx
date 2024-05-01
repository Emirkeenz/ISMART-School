import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p style={{ color: '#000', fontSize: '16px' }}>© 2024 I-SMART. All rights reserved</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
