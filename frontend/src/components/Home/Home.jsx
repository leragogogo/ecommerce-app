import React from "react";
import "./Home.css";
import unicorn from '../../assets/home/home-logo.png';
import { Link } from "react-router-dom";

// landing page
export const Home = () => {
  return <section className="container">
    <div className="content">

      <h1 className="title">
        Hi, it's a magic petshop!
      </h1>
      <p className="description">
        Here your dreams from childhood come true. You can buy various magic pets such as unicorns, dragons and much much more!
      </p>
      <Link to="/pets" className="findPet">
        Find a perfect pet
      </Link>
      <div className="topBlur" />
      <div className="bottomBlur" />
    </div>
    <img src={unicorn} className="unicornImg" />
  </section>
}