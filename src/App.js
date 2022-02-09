import React from "react";
import "./reset.css";
import "./app.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
