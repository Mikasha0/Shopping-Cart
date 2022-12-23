import React, { useEffect } from "react";
// import Axios from "axios";
import "./products.css";
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../Store/cartSlice';
import { fetchProducts } from "../../Store/productsSlice";
import {STATUSES} from '../../Store/productsSlice';


export default function Products() {

  const dispatch = useDispatch();

  const {data:products, status} = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = () => {
    //   Axios.get("https://fakestoreapi.com/products", {
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //     withCredentials: false,
    //     credentials: "same-origin",
    //   }).then((res) => {
    //     setProducts(res.data);
    //   });
    // };
    // fetchProducts();
  }, [dispatch]);

  if(status === STATUSES.LOADING){
    return <h2 className="status" style={{marginTop:'70px'}}>Loading...</h2>
  }

  if(status === STATUSES.ERROR){
    return <h2 className="status" style={{marginTop:'70px'}}>Something went wrong...</h2>
  }

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
