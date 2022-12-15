import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Creators from "./components/Creators";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import Trending from "./components/Trending";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Release />
      <Discover />
      <Creators />
      <Categories />
      <Trending />
      <Footer />
    </Router>
  );
}
export default App;
