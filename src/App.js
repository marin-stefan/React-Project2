import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Product from "../src/pages/Product/Product";
import Register from "./pages/Register/Register";
import Page404 from "./pages/Page404/Page404";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

export default App;
