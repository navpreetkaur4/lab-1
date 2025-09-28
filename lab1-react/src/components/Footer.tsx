import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "1rem" }}>
      <small>Copyright Pixell River Financial {new Date().getFullYear()}</small>
    </footer>
  );
};

export default Footer;
