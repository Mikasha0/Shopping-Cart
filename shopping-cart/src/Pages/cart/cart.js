import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {remove} from '../../Store/cartSlice';

export default function Cart() {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove =(productId)=>{
    dispatch(remove(productId))
  }
  return (
    <>
      <div className="text-center" style={{ marginTop: "80px"}}>
        <h6>On Your Cart</h6>
      </div>
      <div className="container" style={{ justifyContent: "space-around" }}>
        {products.map((product) => (
          <div className="card flex-row my-3" key={product.id}>
            <div className="nothing" style={{padding:'8px'}}>
              <img
                className="card-img-left example-card-img-responsive"
                style={{ height: "10rem", width: "10rem" }}
                src={product.image}
                alt=""
              />
            </div>
            <div className="card-body my-3">
              <h6 className="card-title h5 h4-sm">{product.title}</h6>
              <h6 className="card-text" style={{color:'green'}}>Rs:{product.price}</h6>
              <button className="btn btn-danger w-30" onClick={()=>handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
