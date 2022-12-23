import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./products.css";
import {useDispatch} from 'react-redux';
import {add} from '../../Store/cartSlice';

export default function Products() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = () => {
      Axios.get("https://fakestoreapi.com/products", {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        withCredentials: false,
        credentials: "same-origin",
      }).then((res) => {
        setProducts(res.data);
      });
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) =>{
    dispatch(add(product));
  }

  return (
    <div className="contain" style={{ marginTop: "80px" }}>
      {products.map((product) => (
        <div
          className="menu-cards card p-0 overflow-hidden h-100 shadow bg-image hover-zoom my-3"
          key={product.id}
          style={{ width: "15rem" }}
        >
          <img
            className="card-img-top img-fluid"
            src={product.image}
            style={{ height: "12rem", width: "100%" }}
            alt="imag"
          />
          <div className="card-body bg-light">
            <p className="card-title text-dark">{product.title}</p>
            <h6 className="card-title " style={{ color: "green" }}>
              Rs. {product.price}
            </h6>
            <button className="btn btn-outline-dark w-100" onClick={()=>handleAdd(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
