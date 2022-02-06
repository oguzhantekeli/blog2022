import React from "react";

import "./reset.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Featured from "./components/featured/Featured";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <Home />
      main content goes here
      <Footer />
    </div>
  );
}

export default App;
