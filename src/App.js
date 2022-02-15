import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./app.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import BlogDetail from "./components/blogdetail/BlogDetail";
import Search from "./components/search/Search";
import blogData from "./blogdata.json";
import { Profile } from "./components/profile/Profile";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home blogData={blogData} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/blog/:blogItemId"
            element={<BlogDetail blogData={blogData} />}
          />
          <Route
            path="/search/:searchTerm"
            element={<Search blogData={blogData} type="search" />}
          />
          <Route
            path="/category/:categoryName"
            element={<Search blogData={blogData} type="category" />}
          />
          <Route path="*" element={<div>error</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
