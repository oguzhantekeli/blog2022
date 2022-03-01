import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./reset.css";
import "./app.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import Search from "./pages/search/Search";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import EditPorfile from "./pages/editprofile/EditProfile";
import NewBlog from "./pages/newblog/NewBlog";
import Categories from "./pages/categories/Categories";
import blogData from "./blogdata.json";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home blogData={blogData} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/editprofile" element={<EditPorfile />} />
            <Route path="/newblog" element={<NewBlog />} />
            <Route
              path="/categories"
              element={<Categories blogData={blogData} />}
            />
            <Route path="/editblog/:blogItemId" element={<NewBlog />} />
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
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
