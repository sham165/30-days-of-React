import React from "react";

// footer component
const Footer = (copyRight) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear}</p>
    </div>
  </footer>
);

export default Footer;
