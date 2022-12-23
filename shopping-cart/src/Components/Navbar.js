import React from "react";
import {Link} from 'react-router-dom';
import {ShoppingCart,Bell} from 'phosphor-react';
import { useSelector } from "react-redux";

export default function Navbar() {

  const items = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{color:'red'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link active"><ShoppingCart size={22}/></Link>
            </li>
          </ul>
          
        </div>
        <form className="d-flex">
              <button
                className="btn btn-outline-light disabled"
                type="submit"
              >
                <Bell size={15} /> : {items.length}
              </button>
            </form>
      </div>
    </nav>
  );
}
