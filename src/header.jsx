import React from "react"; // Optional: Import a CSS file for styling

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
