import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Button from "./Button";
import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="app-container">
        <Header title="Welcome to React Props Example" />
        <Profile name="John Doe" age={30} bio="Software Developer" />
        <Button label="Click Me" />
      </div>
    </div>
  );
}

export default App;
